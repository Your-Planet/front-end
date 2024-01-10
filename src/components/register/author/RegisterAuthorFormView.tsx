"use client";

import { FormProvider, useForm } from "react-hook-form";
import { RegisterAuthorForm } from "@/defines/forms/register/author/types";
import { FormEventHandler } from "react";
import { Button } from "@mui/material";
import ReactHookForm from "@/components/common/ReactHookForm";
import { GenderType } from "@/defines/member/types";
import H2 from "@/components/common/text/H2";
import { isNumber } from "@/utils/string";
import { getEmailValidateRule } from "@/utils/react-hook-form/rule";
import PasswordTextField from "@/components/common/password/PasswordTextField";
import useMutationPostAuthorRegister from "@/hooks/queries/member/useMutationPostAuthorRegister";
import { router } from "next/client";

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

	const handleFormSubmit: FormEventHandler = handleSubmit(
		({ genderType, birthDate, passwordConfirm, ...rest }) => {
			mutatePostRegister(
				{
					...rest,
					genderType: genderType!,
					birthDate: birthDate!.format("YYYY-mm-dd"),
					instagramAuthCode,
				},
				{
					onSuccess() {
						// TODO @김현규 회원가입 성공 토스트 메시지 추가
						router.push("/login");
					},
					onError() {
						// TODO @김현규 회원가입 실패 안내 처리
					},
				},
			);
		},
		(errors) => {
			console.log(errors);
		},
	);

	const { TextField, RadioGroup, DatePicker } = ReactHookForm<RegisterAuthorForm>();

	return (
		<>
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
		</>
	);
}

export default RegisterAuthorFormView;
