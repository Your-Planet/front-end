import { Environment } from "@/defines/env/types";
import { getEnvironment } from "@/utils/env";
import { deepFreeze } from "@/utils/object";

const SERVER_URL_BY_ENVIRONMENT: Record<Environment, string> = deepFreeze({
	development: "http://localhost:8080",
	test: "http://localhost:8080",
	production: "https://port-0-back-end-1efqtf2dlr6ithdn.sel5.cloudtype.app/",
});

export const SERVER_URL = SERVER_URL_BY_ENVIRONMENT[getEnvironment()];
