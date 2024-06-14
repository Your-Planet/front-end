export interface InstagramMedia {
	id: string;
	caption: string;
	isSharedToFeed: boolean;
	mediaType: string;
	mediaUrl: string;
	permalink: string;
	timestamp: string;
	username: string;
}

export interface InstagramMediaRequest {
	permalink: string;
}

export interface InstagramMediaResponse {
	medias: InstagramMedia[];
}
