"use client";

import { AccessTokenPayload } from "@/defines/jwt/types";
import { decode } from "jsonwebtoken";
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
	const { children, token } = props;

	const contextValue: AuthContextProps = useMemo(
		() => ({
			jwtPayload: token ? (decode(token) as AccessTokenPayload) : null,
		}),
		[token],
	);

	return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
}

export default AuthClientProvider;
