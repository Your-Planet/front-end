import { IA } from "@/defines/ia/constants";
import { PageAttributes } from "@/defines/ia/types";
import { findObjectPath, getObjectAtPath } from "@/utils/object";

// @ts-ignore
export const getIaPath = (page: PageAttributes) => {
	if (IA === page) return "/";
	return findObjectPath(IA, page) ?? "#";
};

const replaceSlugsInPath = (path: string) => {
	return path.replace(/(?<=\/)\d+(?=\/|$)/g, "[id]");
};

export const getIaObject = (path: string): PageAttributes => {
	return getObjectAtPath(IA, replaceSlugsInPath(path).substring(1), "/");
};
