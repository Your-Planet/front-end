import { getAccessToken } from "@/app/action";
import AuthClientProvider from "@/providers/AuthProvider/components/AuthClientProvider";
import { ReactNode } from "react";

export { useAuthContext } from "@/providers/AuthProvider/components/AuthClientProvider";

export interface AuthProviderProps {
	children: ReactNode;
}

function AuthProvider(props: AuthProviderProps) {
	const { children } = props;

	const token = getAccessToken();

	return <AuthClientProvider token={token}>{children}</AuthClientProvider>;
}

export default AuthProvider;
