import { IA } from "@/defines/ia/constants";
import { PageAttributes } from "@/defines/ia/types";
import { findObjectPath, getObjectAtPath } from "@/utils/object";

// @ts-ignore
export const getIaPath = (page: PageAttributes) => {
	if (IA === page) return "/";
	return findObjectPath(IA, page) ?? "#";
};

export const getIaObject = (path: string): PageAttributes => {
	return getObjectAtPath(IA, path.substring(1), "/");
};
