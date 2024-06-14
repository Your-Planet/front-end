import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

function useRouterPushWithParams() {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const routerPushWithParams = useCallback((filter: string, params: string) => {
		const newSearchParams = new URLSearchParams(searchParams.toString());

		newSearchParams.set(filter, params);
		router.push(`${pathname}/?${newSearchParams.toString()}`, { scroll: false });
	}, []);

	return routerPushWithParams;
}

export default useRouterPushWithParams;
