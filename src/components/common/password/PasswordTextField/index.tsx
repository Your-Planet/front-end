"use client";

import { getPasswordConfirmValidateRule } from "@/utils/react-hook-form/rule";
import ReactHookForm from "@/components/common/ReactHookForm";
import { useFormContext } from "react-hook-form";
import PasswordValidationMessages from "@/components/common/password/PasswordTextField/components/PasswordValidationMessages";
import {
	checkValidCombination,
	checkValidKeyboardContinuity,
	checkValidLength,
	checkValidSameCharContinuity,
	checkValidSequenceContinuity,
} from "@/utils/password";
import { PASSWORD_LENGTH } from "@/defines/password/constants";

interface FormValuesIncludingPassword {
	password: string;
	passwordConfirm: string;
}

function PasswordTextField() {
	const { TextField } = ReactHookForm<FormValuesIncludingPassword>();

	const { watch } = useFormContext<FormValuesIncludingPassword>();

	const password = watch("password");

	const validate = (value: string) => {
		return (
			checkValidLength(value, PASSWORD_LENGTH.min, PASSWORD_LENGTH.max) &&
			checkValidCombination(value) &&
			checkValidSameCharContinuity(value) &&
			checkValidSequenceContinuity(value) &&
			checkValidKeyboardContinuity(value)
		);
	};

	return (
		<>
			<div className="flex flex-col gap-2 mb-2">
				<TextField
					formName="password"
					label="비밀번호"
					rules={{
						validate,
					}}
					required
					placeholder="TODO @김현규 비밀번호 조건"
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
