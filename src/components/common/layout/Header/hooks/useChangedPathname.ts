"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { PageType } from "../defines/types";

export const RouteChangeListener = () => {
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const [changes, setChanges] = useState<PageType>(null);

	useEffect(() => {
		console.log(pathname, searchParams);
		if (pathname === "/") {
			const section = searchParams.get("section");

			if (section === "our_work") {
				setChanges("OUR_WORK");
			} else if (section === "our_team") {
				setChanges("OUR_TEAM");
			} else {
				setChanges("HOME");
			}
		} else if (pathname === "/search") {
			setChanges("SEARCH");
		} else if (pathname === "/post-me") {
			setChanges("POST_ME");
		} else {
			setChanges(null);
		}
	}, [pathname, searchParams]);

	return changes;
};
