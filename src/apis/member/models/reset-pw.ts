export interface ResetPasswordRequest {
	name: string;
	email: string;
	tel: string;
	password: string;
	passwordConfirm: string;
}

export type ResetPasswordResponse = string;
