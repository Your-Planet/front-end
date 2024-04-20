export interface FindEmailRequest {
	name: string;
	tel: string;
}

export type FindEmailResponse = string;

export interface FindPasswordRequest {
	name: string;
	email: string;
	tel: string;
}

export type FindPasswordResponse = string;
