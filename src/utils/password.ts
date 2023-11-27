import {
	checkHasKeyboardContinuity,
	checkHasSameCharContinuity,
	checkHasSequenceContinuity,
	hasLower,
	hasNumber,
	hasSpecial,
	hasUpper,
} from "@/utils/string";

const PASSWORD_LENGTH = {
	min: 8,
	max: 20,
};
const COMBINED_MIN_LIMIT = 3;
const CONTINUOUS_DIGITS_LIMIT = 3;

/**
 * 길이 제한 검사
 * @param password
 */
export const validLength = (password: string): boolean =>
	password.length >= PASSWORD_LENGTH.min && password.length <= PASSWORD_LENGTH.max;

/**
 * 조합 검사
 * @param password
 */
export const validCombination = (password: string): boolean => {
	const combinationCount = [hasNumber(password), hasLower(password), hasUpper(password), hasSpecial(password)].filter(
		(v) => v,
	).length;

	return combinationCount >= COMBINED_MIN_LIMIT;
};

/**
 * 동일 문자 연속성 검사
 * @param password
 */
export const validSameCharContinuity = (password: string): boolean =>
	!checkHasSameCharContinuity(password, CONTINUOUS_DIGITS_LIMIT);

/**
 * 순차적 문자 연속성 검사
 * @param password
 */
export const validSequenceContinuity = (password: string): boolean =>
	!checkHasSequenceContinuity(password, CONTINUOUS_DIGITS_LIMIT);

/**
 * 키보드 연속성 검사
 * @param password
 */
export const validKeyboardContinuity = (password: string): boolean =>
	!checkHasKeyboardContinuity(password, CONTINUOUS_DIGITS_LIMIT);
