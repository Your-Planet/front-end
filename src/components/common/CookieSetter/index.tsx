"use client";

import { CookieOptions } from "@/defines/cookie/types";
import { isPropsEqual } from "@/utils/component";
import { setCookie } from "@/utils/cookie";
import { memo, ReactNode } from "react";

export interface CookieSetterProps {
	name: string;
	value: string;
	expiresAt?: number;
	options?: CookieOptions;
	children: ReactNode | ReactNode[];
}

function CookieSetter(props: CookieSetterProps) {
	const { name, value, expiresAt, options, children } = props;

	setCookie(name, value, expiresAt, options);

	return <>{children}</>;
}

export default memo(CookieSetter, isPropsEqual);
