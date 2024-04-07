"use client";

import ReactHookForm from "@/components/common/ReactHookForm";
import H2 from "@/components/common/text/H2";
import { StyledBox } from "@/components/find/FindEmailView/defines/styles";
import { FindEmailForm } from "@/defines/forms/find/email/types";
import useMutationPostEmailFind from "@/hooks/queries/member/useMutationPostEmailFind";
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
				console.log(data);

				// router.push(getIaPath(IA.find.email.complete));
			},
		});
	});

	const { TextField } = ReactHookForm<FindEmailForm>();

	const nameWatcher = watch("name");
	const telWatcher = watch("tel");

	return (
		<StyledBox>
			<H2>이메일 찾기</H2>

			<FormProvider {...form}>
				<form onSubmit={handleFormSubmit} className="find-email-form" noValidate>
					<TextField formName="name" label="이름" required fullWidth />

					<TextField
						formName="tel"
						label="연락처"
						required
						validator={isNumber}
						placeholder="숫자만 입력하세요"
						type="tel"
						fullWidth
					/>

					<Button fullWidth variant="contained" size="large" type="submit" disabled={!(nameWatcher && telWatcher)}>
						다음
					</Button>
				</form>
			</FormProvider>
		</StyledBox>
	);
}

export default FindEmailView;
