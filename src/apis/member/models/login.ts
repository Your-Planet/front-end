export interface LoginRequest {
	email: string;
	password: string;
	isRemember: boolean;
}

export type LoginResponse = string;
