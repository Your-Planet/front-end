import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

function useRouterPushWithParams() {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const routerPushWithParams = useCallback((filter: string | string[], params: string | string[]) => {
		const newSearchParams = new URLSearchParams(searchParams.toString());

		if (typeof filter === "string" && typeof params === "string") {
			newSearchParams.set(filter, params);
		} else {
			for (let i = 0; i < filter.length; ++i) {
				newSearchParams.set(filter[i], params[i]);
			}
		}
		router.push(`${pathname}/?${newSearchParams.toString()}`, { scroll: false });
	}, []);

	return routerPushWithParams;
}

export default useRouterPushWithParams;
