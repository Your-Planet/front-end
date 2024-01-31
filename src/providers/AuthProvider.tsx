"use client";

import { COOKIE } from "@/defines/cookie/constants";
import { AccessTokenPayload } from "@/defines/jwt/types";
import { getCookie } from "@/utils/cookie";
import { decode } from "jsonwebtoken";
import { usePathname } from "next/navigation";
import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from "react";

export interface AuthContextProps {
	jwtPayload: AccessTokenPayload | null;
}

export const AuthContext = createContext<AuthContextProps>({
	jwtPayload: null,
});

export const useAuthContext = () => useContext(AuthContext);

export interface AuthProviderProps {
	children: ReactNode;
}

function AuthProvider(props: AuthProviderProps) {
	const { children } = props;

	const pathname = usePathname();

	const [token, setToken] = useState<string>();

	useEffect(() => {
		setToken(getCookie(COOKIE.accessToken));
	}, [pathname]);

	const contextValue: AuthContextProps = useMemo(
		() => ({
			jwtPayload: token ? (decode(token) as AccessTokenPayload) : null,
		}),
		[token],
	);

	return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
