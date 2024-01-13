"use client";

import ReactHookForm from "@/components/common/ReactHookForm";
import PasswordTextField from "@/components/common/password/PasswordTextField";
import H2 from "@/components/common/text/H2";
import useRegisterForm from "@/components/register/form/hooks/useRegisterForm";
import { RegisterAuthorForm } from "@/defines/forms/register/author/types";
import { GenderType } from "@/defines/member/types";
import useMutationPostAuthorRegister from "@/hooks/queries/member/useMutationPostAuthorRegister";
import { getEmailValidateRule } from "@/utils/react-hook-form/rule";
import { isNumber } from "@/utils/string";
import { Button } from "@mui/material";
import { FormEventHandler } from "react";
import { FormProvider, useForm } from "react-hook-form";

export interface RegisterAuthorFormViewProps {
	instagramAuthCode: string;
}

function RegisterAuthorFormView(props: RegisterAuthorFormViewProps) {
	const { instagramAuthCode } = props;

	const form = useForm<RegisterAuthorForm>({
		mode: "all",
		defaultValues: {
			email: "",
			password: "",
			passwordConfirm: "",
			name: "",
			genderType: null,
			tel: "",
			birthDate: null,
		},
	});

	const { handleSubmit } = form;

	const { mutate: mutatePostRegister } = useMutationPostAuthorRegister({});

	const { handleSuccessRegister, handleFailRegister } = useRegisterForm();

	const handleFormSubmit: FormEventHandler = handleSubmit(({ genderType, birthDate, passwordConfirm, ...rest }) => {
		mutatePostRegister(
			{
				...rest,
				genderType: genderType!,
				birthDate: birthDate!.format("YYYY-mm-dd"),
				instagramAuthCode,
			},
			{
				onSuccess: handleSuccessRegister,
				onError: handleFailRegister,
			},
		);
	});

	const { TextField, RadioGroup, DatePicker } = ReactHookForm<RegisterAuthorForm>();

	return (
		<div className="max-w-[520px] mx-auto py-28">
			<H2>회원 가입 (작가)</H2>

			<FormProvider {...form}>
				<form onSubmit={handleFormSubmit} className="mt-8 flex flex-col gap-4">
					<TextField
						formName="email"
						label="이메일"
						required
						rules={{
							...getEmailValidateRule(),
						}}
						placeholder="abc12@naver.com"
						type="email"
						fullWidth
					/>

					<PasswordTextField />

					<TextField formName="name" label="이름" required fullWidth />

					<RadioGroup<GenderType>
						label="성별"
						formName="genderType"
						required
						radios={[
							{
								label: "남",
								value: "MALE",
							},
							{
								label: "여",
								value: "FEMALE",
							},
						]}
					/>

					<TextField
						formName="tel"
						label="연락처"
						required
						validator={isNumber}
						placeholder="숫자만 입력하세요"
						type="tel"
						fullWidth
					/>

					<DatePicker formName="birthDate" label="생년월일" required />

					<Button type="submit" variant="contained" size="large" fullWidth>
						가입하기
					</Button>
				</form>
			</FormProvider>
		</div>
	);
}

export default RegisterAuthorFormView;
