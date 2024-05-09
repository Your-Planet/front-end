export interface InstagramPost {
	id: string;
	caption: string;
	isSharedToFeed: boolean;
	mediaType: string;
	mediaUrl: string;
	permalink: string;
	thumbnailUrl: string;
	timestamp: string;
	username: string;
}

export interface InstagramPostRequest {
	permalink: string;
}

export interface InstagramPostResponse {
	posts: InstagramPost[];
}
