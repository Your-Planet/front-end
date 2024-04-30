export interface InstagramPost {
	id: string;
	caption: string;
	is_shared_to_feed: boolean;
	media_type: string;
	media_url: string;
	permalink: string;
	thumbnail_url: string;
	timestamp: string;
	username: string;
}

export interface InstagramPostRequest {
	permalink: string;
}

export interface InstagramPostResponse {
	posts: InstagramPost[];
}
