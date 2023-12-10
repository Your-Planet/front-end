"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { PageType } from "../defines/types";
import { useQueryState } from "next-usequerystate";

export const RouteChangeListener = () => {
	const pathname = usePathname();
	const [queryState, _] = useQueryState("section");
	const [changes, setChanges] = useState<PageType>(null);

	useEffect(() => {
		setTimeout(() => {
			if (pathname === "/") {
				if (queryState === "our_work") {
					setChanges("OUR_WORK");
				} else if (queryState === "our_team") {
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
		}, 100);
	}, [pathname, queryState]);

	return changes;
};
