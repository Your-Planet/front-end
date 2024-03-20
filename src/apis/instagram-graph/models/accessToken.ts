export interface LongLivedAccessTokenRequest {
	client_secret: string;
	grant_type: "ig_exchange_token";
	access_token: string;
}

export interface LongLivedAccessTokenResponse {
	access_token: string;
	token_type: "bearer";
	expires_in: number;
}
