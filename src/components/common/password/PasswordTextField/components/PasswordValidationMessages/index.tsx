"use client";

import { COMBINED_MIN_LIMIT, CONTINUOUS_DIGITS_LIMIT, PASSWORD_LENGTH } from "@/defines/password/constants";
import {
	checkValidCombination,
	checkValidKeyboardContinuity,
	checkValidLength,
	checkValidSameCharContinuity,
	checkValidSequenceContinuity,
} from "@/utils/password";
import classNames from "classnames";

export interface IndexProps {
	password: string;
}

function PasswordValidationMessages(props: IndexProps) {
	const { password } = props;

	const validations: {
		message: string;
		valid: boolean;
	}[] = [
		{
			message: `${PASSWORD_LENGTH.min}자 이상 ${PASSWORD_LENGTH.max} 이하`,
			valid: checkValidLength(password, PASSWORD_LENGTH.min, PASSWORD_LENGTH.max),
		},
		{
			message: `영어 대문자, 소문자, 숫자, 특수문자 중 ${COMBINED_MIN_LIMIT}종류 문자 조합으로 구성`,
			valid: checkValidCombination(password),
		},
		{
			message: `동일한 문자 ${CONTINUOUS_DIGITS_LIMIT}자리 연속 사용 금지`,
			valid: checkValidSameCharContinuity(password),
		},
		{
			message: `${CONTINUOUS_DIGITS_LIMIT}자리 이상 연속적이거나 키보드상 연속된 문자 및 숫자열 제한`,
			valid: checkValidSequenceContinuity(password) && checkValidKeyboardContinuity(password),
		},
	];

	return (
		<ul className="flex flex-col gap-1 list-disc list-inside">
			{validations.map(({ message, valid }, index) => (
				<li
					key={index}
					className={classNames(
						"text-sm",
						"transition-colors",
						valid ? ["text-blue-500", "font-semibold"] : "text-gray-400",
					)}
				>
					{message}
				</li>
			))}
		</ul>
	);
}

export default PasswordValidationMessages;
