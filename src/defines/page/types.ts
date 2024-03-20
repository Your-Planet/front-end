import { ParsedUrlQuery } from "querystring";

export interface PageProps {
	params: Record<string, string>;
	searchParams: ParsedUrlQuery;
}
