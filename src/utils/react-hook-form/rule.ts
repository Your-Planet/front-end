import { Message } from "react-hook-form";
import { isEmail } from "@/utils/string";

export const getMaxLengthPlaceholder = (maxLength: number) => `${maxLength}자까지 입력 가능합니다.`;

export const getRequiredErrorMessage = () => "필수 입력 항목이에요.";

export const getMaxLengthErrorMessage = (maxLength: number) => `${maxLength}자 이하로 입력해 주세요.`;

export const getMinLengthErrorMessage = (minLength: number) => `${minLength}자 이상 입력해 주세요.`;

export const getLengthErrorMessage = (length: number, prefix = "") => `${prefix} ${length}자로 입력해 주세요.`.trim();

export const getAlphabetLengthErrorMessage = (length: number) => `영문 ${length}자로 입력해 주세요.`;

const getMaxLengthRule = (maxLength: number, message?: Message | ((maxLength: number) => Message)) => ({
	maxLength: {
		value: maxLength,
		message: message
			? typeof message === "function"
				? message(maxLength)
				: message
			: getMaxLengthErrorMessage(maxLength),
	},
});

const getMinLengthRule = (minLength: number, message?: Message | ((minLength: number) => Message)) => ({
	minLength: {
		value: minLength,
		message: message
			? typeof message === "function"
				? message(minLength)
				: message
			: getMinLengthErrorMessage(minLength),
	},
});

export const getEmailValidateRule = () => ({
	validate: (value: string) => {
		if (!value || isEmail(value)) return true;
		return "이메일 형식이 유효하지 않습니다.";
	},
});

export const getPasswordConfirmValidateRule = (password: string) => ({
	validate: (value: string) => {
		if (!password || !value || value === password) return true;
		return "비밀번호가 일치하지 않습니다.";
	},
});