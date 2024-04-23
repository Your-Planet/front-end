"use client";

import ReactHookForm from "@/components/common/ReactHookForm";
import H2 from "@/components/common/text/H2";

import CentralBox from "@/components/common/CentralBox";

import { StyledFormInFind } from "@/components/find/components/defines/styles";
import { FindPasswordForm } from "@/defines/forms/find/password/types";
import { IA } from "@/defines/ia/constants";
import { SESSION_STORAGE } from "@/defines/sessionStorage/constants";
import useMutationPostPasswordFind from "@/hooks/queries/member/useMutationPostPasswordFind";
import { getIaPath } from "@/utils/ia";
import { getEmailValidateRule, getMinLengthRule } from "@/utils/react-hook-form/rule";
import { isNumber } from "@/utils/string";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";

type Props = {};

interface FindPasswordFormInterface extends FindPasswordForm {}

function FindPasswordView(props: Props) {
	const router = useRouter();

	const form = useForm<FindPasswordFormInterface>({
		defaultValues: {
			name: "",
			email: "",
			tel: "",
		},
	});

	const { handleSubmit, watch } = form;

	const { mutate: mutatePostFindPassword } = useMutationPostPasswordFind({});

	const { TextField } = ReactHookForm<FindPasswordForm>();

	const [name, email, tel] = watch(["name", "email", "tel"]);

	const handleFormSubmit = handleSubmit((data) => {
		mutatePostFindPassword(data, {
			onSuccess({ data }) {
				// is it right?
				sessionStorage.setItem(
					SESSION_STORAGE.resetPassword,
					JSON.stringify({
						name,
						email,
						tel,
					}),
				);
				router.push(getIaPath(IA["reset-pw"]));
			},
			onError({ response }) {
				alert(response?.data.message);
			},
		});
	});

	return (
		<CentralBox>
			<H2>비밀번호 찾기</H2>

			<FormProvider {...form}>
				<StyledFormInFind onSubmit={handleFormSubmit} noValidate>
					<TextField formName="name" label="이름" required fullWidth />

					<TextField
						formName="email"
						label="이메일"
						rules={{
							...getEmailValidateRule(),
						}}
						placeholder="abc12@naver.com"
						type="email"
						required
						fullWidth
					/>

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

					<Button fullWidth variant="contained" size="large" type="submit" disabled={!(name && email && tel)}>
						다음
					</Button>
				</StyledFormInFind>
			</FormProvider>
		</CentralBox>
	);
}

export default FindPasswordView;
