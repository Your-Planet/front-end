/**
 * 숫자 여부 판단
 * @param str
 */
export const isNumber = (str: string): boolean => /^[0-9]*$/.test(str);
