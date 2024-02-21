"use client";

import { MemberType } from "@/defines/member/types";
import { useAuthContext } from "@/providers/AuthProvider";
import { isPropsEqual } from "@/utils/component";
import { useRouter } from "next/navigation";
import { memo, ReactNode, useEffect } from "react";

type MemberTypeConfig =
	| {
			allowedMemberTypes?: MemberType[];
			disallowedMemberTypes?: never;
	  }
	| {
			disallowedMemberTypes?: MemberType[];
			allowedMemberTypes?: never;
	  };

export type AuthGuardProps = {
	children: ReactNode;
} & MemberTypeConfig;

function AuthGuard(props: AuthGuardProps) {
	const { allowedMemberTypes, disallowedMemberTypes, children } = props;

	const { jwtPayload } = useAuthContext();

	const router = useRouter();

	useEffect(() => {
		if (!jwtPayload) {
			router.push("/login");
			return;
		}

		const { memberType } = jwtPayload;

		const isNotAllowed = allowedMemberTypes && !allowedMemberTypes.includes(memberType);
		const isDisallowed = disallowedMemberTypes && disallowedMemberTypes.includes(memberType);

		if (isNotAllowed || isDisallowed) {
			// TODO @김현규 ErrorBoundary 작업 이후 throw 하는 방식으로 변경
			router.push("/403");
		}
	}, [jwtPayload, allowedMemberTypes, disallowedMemberTypes]);

	return <>{children}</>;
}

export default memo(AuthGuard, isPropsEqual);
