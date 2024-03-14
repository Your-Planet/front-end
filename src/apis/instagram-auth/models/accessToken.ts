export interface AccessTokenRequest {
	client_id: string;
	client_secret: string;
	code: string;
	grant_type: "authorization_code";
	redirect_uri: string;
}

export interface AccessTokenResponse {
	access_token: string;
	user_id: string;
}
