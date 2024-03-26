type FieldType = "account_type" | "id" | "media_count" | "username";

export interface MeRequest {
	access_token: string;
	fields?: FieldType[];
}

export type MeResponse = Partial<Record<FieldType, string>>;
