import { IA } from "@/defines/ia/constants";
import { getIaPath } from "@/utils/ia";
import { objectToUrlParams } from "@/utils/object";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export default function useRedirectLoginPage() {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const redirectLoginPage = useCallback(() => {
		const redirectPageUrl = `${pathname}?${searchParams.toString()}`;

		const loginPagePathname = getIaPath(IA.login);

		const loginPageParams = objectToUrlParams({
			redirect: redirectPageUrl,
		}).toString();

		const loginPageUrl = `${loginPagePathname}?${loginPageParams}`;

		router.push(loginPageUrl);
	}, [router, pathname, searchParams]);

	return redirectLoginPage;
}
