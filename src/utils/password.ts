import {
	checkHasKeyboardContinuity,
	checkHasSameCharContinuity,
	checkHasSequenceContinuity,
	hasLower,
	hasNumber,
	hasSpecial,
	hasUpper,
} from "@/utils/string";
import { COMBINED_MIN_LIMIT, CONTINUOUS_DIGITS_LIMIT } from "@/defines/password/constants";

/**
 * 길이 제한 검사
 * @param password
 */
export const checkValidLength = (password: string, min: number, max: number): boolean =>
	password.length >= min && password.length <= max;

/**
 * 조합 검사
 * @param password
 */
export const checkValidCombination = (password: string): boolean => {
	const combinationCount = [hasNumber(password), hasLower(password), hasUpper(password), hasSpecial(password)].filter(
		(v) => v,
	).length;

	return combinationCount >= COMBINED_MIN_LIMIT;
};

const checkMinLength = (password: string, min: number): boolean => password.length >= min;

/**
 * 동일 문자 연속성 검사
 * @param password
 */
export const checkValidSameCharContinuity = (password: string): boolean =>
	checkMinLength(password, CONTINUOUS_DIGITS_LIMIT) && !checkHasSameCharContinuity(password, CONTINUOUS_DIGITS_LIMIT);

/**
 * 순차적 문자 연속성 검사
 * @param password
 */
export const checkValidSequenceContinuity = (password: string): boolean =>
	checkMinLength(password, CONTINUOUS_DIGITS_LIMIT) && !checkHasSequenceContinuity(password, CONTINUOUS_DIGITS_LIMIT);

/**
 * 키보드 연속성 검사
 * @param password
 */
export const checkValidKeyboardContinuity = (password: string): boolean =>
	checkMinLength(password, CONTINUOUS_DIGITS_LIMIT) && !checkHasKeyboardContinuity(password, CONTINUOUS_DIGITS_LIMIT);
