import { DefaultOptions } from "cookies-next/lib/types";

export type CookieOptions = Omit<DefaultOptions, "expires"> &
	(
		| {
				expires?: Date;
				atExpires?: never;
		  }
		| {
				expires?: never;
				atExpires?: number;
		  }
	);
