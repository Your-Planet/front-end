"use client";

import { getPasswordConfirmValidateRule, getPasswordValidateRule } from "@/utils/react-hook-form/rule";
import ReactHookForm from "@/components/common/ReactHookForm";
import { useFormContext } from "react-hook-form";
import PasswordValidationMessages from "@/components/common/password/PasswordTextField/components/PasswordValidationMessages";

interface FormValuesIncludingPassword {
	password: string;
	passwordConfirm: string;
}

function PasswordTextField() {
	const { TextField } = ReactHookForm<FormValuesIncludingPassword>();

	const { watch } = useFormContext<FormValuesIncludingPassword>();

	const password = watch("password");

	return (
		<>
			<div className="flex flex-col gap-2 mb-2">
				<TextField
					formName="password"
					label="비밀번호"
					rules={{
						...getPasswordValidateRule(),
					}}
					required
					placeholder="아래 조건에 맞게 비밀번호를 입력하세요"
					type="password"
					fullWidth
					hideErrorMessage
				/>

				<PasswordValidationMessages password={password} />
			</div>

			<TextField
				formName="passwordConfirm"
				label="비밀번호 확인"
				required
				rules={{
					...getPasswordConfirmValidateRule(password),
				}}
				placeholder="비밀번호를 다시 한번 입력하세요"
				type="password"
				fullWidth
			/>
		</>
	);
}

export default PasswordTextField;
