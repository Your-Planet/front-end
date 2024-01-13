import { Environment } from "@/defines/env/types";

export const getEnvironment = (): Environment => {
	return process.env.NODE_ENV;
};
