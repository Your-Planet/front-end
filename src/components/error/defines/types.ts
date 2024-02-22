import { HttpStatusCode } from "axios";

export type PageErrorCode = Extract<
	HttpStatusCode,
	HttpStatusCode.Forbidden | HttpStatusCode.NotFound | HttpStatusCode.InternalServerError
>;

export interface ErrorViewProps {
	errorCode?: HttpStatusCode;
	title: string;
	description: string;
}
