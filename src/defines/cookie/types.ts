import { DefaultOptions } from "cookies-next/lib/types";

export type CookieOptions = Omit<DefaultOptions, "expires">;
