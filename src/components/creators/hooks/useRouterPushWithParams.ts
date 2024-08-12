"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

function useRouterPushWithParams() {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const routerPushWithParams = useCallback(
		(filter: string | string[], params: string | string[]) => {
			const newSearchParams = new URLSearchParams(searchParams.toString());

			if (typeof filter === "string" && typeof params === "string") {
				if (filter !== "" && params === "") {
					newSearchParams.delete(filter);
				} else if (filter !== "" && params !== "") {
					newSearchParams.set(filter, params);
				}
			} else {
				for (let i = 0; i < filter.length; ++i) {
					if (filter[i] !== "" && params[i] === "") {
						newSearchParams.delete(filter[i]);
					} else if (filter[i] !== "" && params[i] !== "") {
						newSearchParams.set(filter[i], params[i]);
					}
				}
			}
			router.push(`${pathname}/?${newSearchParams.toString()}`, { scroll: false });
		},
		[searchParams],
	);

	return routerPushWithParams;
}

export default useRouterPushWithParams;
