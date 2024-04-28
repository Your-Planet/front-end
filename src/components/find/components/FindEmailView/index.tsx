"use client";

import CentralBox from "@/components/common/CentralBox";
import ReactHookForm from "@/components/common/ReactHookForm";
import H2 from "@/components/common/text/H2";
import { StyledFormInFind } from "@/components/find/components/defines/styles";
import { FindEmailForm } from "@/defines/forms/find/email/types";
import { IA } from "@/defines/ia/constants";
import { SESSION_STORAGE } from "@/defines/sessionStorage/constants";
import useMutationPostEmailFind from "@/hooks/queries/member/useMutationPostEmailFind";
import { getIaPath } from "@/utils/ia";
import { getMinLengthRule } from "@/utils/react-hook-form/rule";
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
			// TODO: @나은찬 mui alert 대체
			onError({ response }) {
				alert(response?.data.message);
			},
		});
	});

	const { TextField } = ReactHookForm<FindEmailForm>();

	const [name, tel] = watch(["name", "tel"]);

	return (
		<CentralBox>
			<H2>이메일 찾기</H2>

			<FormProvider {...form}>
				<StyledFormInFind onSubmit={handleFormSubmit} noValidate>
					<TextField formName="name" label="이름" required fullWidth />

					<TextField
						formName="tel"
						label="연락처"
						required
						validator={isNumber}
						rules={{ ...getMinLengthRule(10) }}
						placeholder="숫자만 입력하세요"
						type="tel"
						fullWidth
					/>

					<Button fullWidth variant="contained" size="large" type="submit" disabled={!(name && tel)}>
						다음
					</Button>
				</StyledFormInFind>
			</FormProvider>
		</CentralBox>
	);
}

export default FindEmailView;
