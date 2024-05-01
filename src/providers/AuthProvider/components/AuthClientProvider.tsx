"use client";

import { COOKIE } from "@/defines/cookie/constants";
import { AccessTokenPayload } from "@/defines/jwt/types";
import { getCookie } from "@/utils/cookie";
import { decode } from "jsonwebtoken";
import { usePathname } from "next/navigation";
import { ReactNode, createContext, useContext, useMemo } from "react";

interface AuthContextProps {
	jwtPayload: AccessTokenPayload | null;
}

const AuthContext = createContext<AuthContextProps>({
	jwtPayload: null,
});

export const useAuthContext = () => useContext(AuthContext);

interface AuthClientProviderProps {
	token: string | undefined;
	children: ReactNode;
}

function AuthClientProvider(props: AuthClientProviderProps) {
	const { children, token: tokenFromServer } = props;
	const pathname = usePathname();

	const contextValue: AuthContextProps = useMemo(() => {
		const token = tokenFromServer ?? getCookie(COOKIE.accessToken);

		return {
			jwtPayload: token ? (decode(token) as AccessTokenPayload) : null,
		};
	}, [tokenFromServer, pathname]);

	return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
}

export default AuthClientProvider;
