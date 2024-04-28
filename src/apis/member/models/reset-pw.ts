export interface ResetPasswordRequest {
	name: string;
	email: string;
	tel: string;
	newPassword: string;
}

export type ResetPasswordResponse = string;
