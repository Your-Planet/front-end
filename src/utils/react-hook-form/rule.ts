import { PASSWORD_LENGTH } from "@/defines/password/constants";
import { AUTHOR_INTRODUCTION_LENGTH } from "@/defines/post_me/constants";
import {
	checkValidCombination,
	checkValidKeyboardContinuity,
	checkValidLength,
	checkValidSameCharContinuity,
	checkValidSequenceContinuity,
} from "@/utils/password";
import { isEmail } from "@/utils/string";
import { Message } from "react-hook-form";
import { GenreType } from "../../components/search/defines/types";
import { SELECTED_GENRE_LIMIT } from "../../defines/post_me/constants";

export const getMaxLengthPlaceholder = (maxLength: number) => `${maxLength}자까지 입력 가능합니다.`;

export const getRequiredErrorMessage = () => "필수 입력 항목이에요.";

export const getMaxLengthErrorMessage = (maxLength: number) => `${maxLength}자 이하로 입력해 주세요.`;

export const getMinLengthErrorMessage = (minLength: number) => `${minLength}자 이상 입력해 주세요.`;

export const getLengthErrorMessage = (length: number, prefix = "") => `${prefix} ${length}자로 입력해 주세요.`.trim();

export const getAlphabetLengthErrorMessage = (length: number) => `영문 ${length}자로 입력해 주세요.`;

export const getSelectGenreErrorMessage = (limit: number) => `최대 ${limit}개 선택해 주세요.`;

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

export const getPasswordValidateRule = () => ({
	validate: (value: string) =>
		checkValidLength(value, PASSWORD_LENGTH.min, PASSWORD_LENGTH.max) &&
		checkValidCombination(value) &&
		checkValidSameCharContinuity(value) &&
		checkValidSequenceContinuity(value) &&
		checkValidKeyboardContinuity(value),
});

export const getPasswordConfirmValidateRule = (password: string) => ({
	validate: (value: string) => {
		if (!password || !value || value === password) return true;
		return "비밀번호가 일치하지 않습니다.";
	},
});

export const getAuthorIntroductionValidateRule = () => ({
	validate: (value: string) => {
		if (checkValidLength(value, AUTHOR_INTRODUCTION_LENGTH.min, AUTHOR_INTRODUCTION_LENGTH.max)) return true;
		else if (value.length < AUTHOR_INTRODUCTION_LENGTH.min)
			return getMinLengthErrorMessage(AUTHOR_INTRODUCTION_LENGTH.min);
		else if (value.length > AUTHOR_INTRODUCTION_LENGTH.max)
			return getMaxLengthErrorMessage(AUTHOR_INTRODUCTION_LENGTH.max);
	},
});

export const getSelectGenreValidateRule = () => ({
	validate: (value: Set<GenreType>) => {
		if (value.size <= SELECTED_GENRE_LIMIT) return true;
		return getSelectGenreErrorMessage(SELECTED_GENRE_LIMIT);
	},
});
