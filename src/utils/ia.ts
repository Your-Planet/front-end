import { IA } from "@/defines/ia/constants";
import { PageAttributes } from "@/defines/ia/types";
import { findObjectPath } from "@/utils/object";

export const getIaPath = (page: PageAttributes) => {
	return findObjectPath(IA, page);
};
