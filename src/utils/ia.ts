import { IA } from "@/defines/ia/constants";
import { PageAttributes } from "@/defines/ia/types";
import { findObjectPath } from "@/utils/object";

export const getIaPath = (page: PageAttributes) => {
	if (IA === page) return "/";
	return findObjectPath(IA, page);
};
