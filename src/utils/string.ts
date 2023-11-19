/**
 * 숫자 여부 판단
 * @param str
 */
export const isNumber = (str: string): boolean => /^[0-9]*$/.test(str);

/**
 * 이메일 여부 판단
 * @param str
 */
export const isEmail = (str: string): boolean => {
	return /^[A-Za-z0-9_.\-]{1,64}@[A-Za-z0-9_.\-]{1,260}$/.test(str);
};
