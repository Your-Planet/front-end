import { HttpStatusCode } from "axios";

export interface ErrorViewProps {
	errorCode?: HttpStatusCode;
	title: string;
	description: string;
}
