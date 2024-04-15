"use client";

import ReactHookForm from "@/components/common/ReactHookForm";
import H2 from "@/components/common/text/H2";
import { StyledBoxInFind, StyledFormBoxInFind } from "@/components/find/defines/styles";
import { FindEmailForm } from "@/defines/forms/find/email/types";
import { IA } from "@/defines/ia/constants";
import { SESSION_STORAGE } from "@/defines/sessionStorage/constants";
import useMutationPostEmailFind from "@/hooks/queries/member/useMutationPostEmailFind";
import { getIaPath } from "@/utils/ia";
import { isNumber } from "@/utils/string";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";

type Props = {};

interface FindEmailFormInterface extends FindEmailForm {}

function FindEmailView(props: Props) {
	const router = useRouter();

	const form = useForm<FindEmailFormInterface>({
		defaultValues: {
			name: "",
			tel: "",
		},
	});

	const { handleSubmit, watch } = form;

	const { mutate: mutatePostFindEmail } = useMutationPostEmailFind({});

	const handleFormSubmit = handleSubmit((data) => {
		mutatePostFindEmail(data, {
			onSuccess({ data }) {
				sessionStorage.setItem(SESSION_STORAGE.foundEmail, data);
				router.push(getIaPath(IA.find.email.complete));
			},
			onError({ response }) {
				alert(response?.data.message);
			},
		});
	});

	const { TextField } = ReactHookForm<FindEmailForm>();

	const nameWatcher = watch("name");
	const telWatcher = watch("tel");

	const validateTel = (value: string) => {
		if (value.length >= 10) {
			return true;
		}

		return "최소 10자리 이상이어야 합니다.";
	};

	return (
		<StyledBoxInFind>
			<H2>이메일 찾기</H2>

			<FormProvider {...form}>
				<form onSubmit={handleFormSubmit} noValidate>
					<StyledFormBoxInFind>
						<TextField formName="name" label="이름" required fullWidth />

						<TextField
							formName="tel"
							label="연락처"
							required
							validator={isNumber}
							rules={{ validate: validateTel }}
							placeholder="숫자만 입력하세요"
							type="tel"
							fullWidth
						/>

						<Button fullWidth variant="contained" size="large" type="submit" disabled={!(nameWatcher && telWatcher)}>
							다음
						</Button>
					</StyledFormBoxInFind>
				</form>
			</FormProvider>
		</StyledBoxInFind>
	);
}

export default FindEmailView;
