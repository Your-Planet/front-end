export interface InstagramMedia {
	id: string;
	caption: string;
	sharedToFeed: boolean;
	mediaType: string;
	mediaUrl: string;
	permalink: string;
	timestamp: string | null;
	username: string;
}

export interface InstagramMediaRequest {
	permalink: string;
}

export interface InstagramMediaResponse {
	medias: InstagramMedia[];
}
