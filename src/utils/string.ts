const KEYBOARD = "`12 90-= ~!@#$%^&*()_+ /*- qwertyuiop[] asdfghjkl;' zxcvbnm,./ QWERTYUIOP{} ASDFGHJKL:\" ZXCVBNM<>?";
const ALPHABET_SEQUENCE = "abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const NUMBER_SEQUENCE = "01234567890";

/**
 * 숫자 여부 판단
 * @param str
 */
export const isNumber = (str: string): boolean => /^[0-9]*$/.test(str);

/**
 * 이메일 여부 판단
 * @param str
 */
export const isEmail = (str: string): boolean => /^[A-Za-z0-9_.\-]{1,64}@[A-Za-z0-9_.\-]{1,260}$/.test(str);

/**
 * 유효한 URL 형식인지 검사
 * @param str
 */
export const isUrl = (str: string): boolean => {
	// eslint-disable-next-line prefer-regex-literals
	const urlRegex = new RegExp(
		"^(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|www\\.){1}([0-9A-Za-z-\\.@:%_+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?",
	);
	return urlRegex.test(str);
};

/**
 * 문자열에 특정 패턴이 있는지 검사
 * @param str
 * @param regExp
 */
export const hasPattern = (str: string, regExp: RegExp) => !!(str.search(regExp) + 1);

/**
 * 문자열에 숫자가 있는지 검사
 * @param password
 */
export const hasNumber = (password: string) => hasPattern(password, /[0-9]/g);

/**
 * 문자열에 소문자가 있는지 검사
 * @param password
 */
export const hasLower = (password: string) => hasPattern(password, /[a-z]/g);

/**
 * 문자열에 대문자가 있는지 검사
 * @param password
 */
export const hasUpper = (password: string) => hasPattern(password, /[A-Z]/g);

/**
 * 문자열에 특수문자가 있는지 검사
 * @param password
 */
export const hasSpecial = (password: string) => hasPattern(password, /[^a-z0-9]/gi);

/**
 * 뒤집은 문자열 반환
 * @param str
 */
export const getReverseString = (str: string) => str.split("").reverse().join("");

/**
 * 부분 문자열 검사
 * @param str
 * @param length
 * @param trueCondition
 */
export const checkSubstring = (str: string, length: number, trueCondition: (substring: string) => boolean) => {
	const last = str.length - length + 1;

	for (let i = 0; i < last; i++) {
		const substring = str.substring(i, i + length);

		if (trueCondition(substring)) {
			return true;
		}
	}
	return false;
};

/**
 * 동일 문자 연속 검사
 * @param str
 * @param length
 */
export const checkHasSameCharContinuity = (str: string, length: number) => {
	const { length: strLength } = str;
	if (strLength < length) {
		return false;
	}

	const last = strLength - length + 1;
	for (let i = 0; i < last; i++) {
		const value = str.charAt(i);

		const tmpLast = i + length;
		let j = i;
		for (; j < tmpLast; j++) {
			if (value !== str.charAt(j)) {
				break;
			}
		}

		if (j === tmpLast) {
			return true;
		}
	}

	return false;
};

/**
 * 연속적인 문자열 검사
 * @param str
 * @param length
 */
export const checkHasSequenceContinuity = (str: string, length: number) => {
	return checkSubstring(str, length, (substring) => {
		if (substring.length < length) {
			return false;
		}

		const substringReverse = getReverseString(substring);

		return !!(
			~ALPHABET_SEQUENCE.indexOf(substring) ||
			~ALPHABET_SEQUENCE.indexOf(substringReverse) ||
			~NUMBER_SEQUENCE.indexOf(substring) ||
			~NUMBER_SEQUENCE.indexOf(substringReverse)
		);
	});
};

/**
 * 키보드상 인접한 문자열 연속성 검사
 * @param str
 * @param length
 */
export const checkHasKeyboardContinuity = (str: string, length: number) => {
	return checkSubstring(str, length, (substring) => {
		if (substring.length < length) {
			return false;
		}

		return Boolean(~KEYBOARD.indexOf(substring) || ~KEYBOARD.indexOf(getReverseString(substring)));
	});
};

/**
 * "/"로 시작하는 문자열 반환
 * @param str
 */
export const getLeadingSlash = (str: string) => {
	return str.startsWith("/") ? str : `/${str}`;
};
