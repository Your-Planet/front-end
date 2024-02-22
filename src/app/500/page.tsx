import ErrorView from "@/components/error/ErrorView";
import { ERROR_VIEW_PROPS_BY_ERROR_CODE } from "@/components/error/defines/constants";
import { HttpStatusCode } from "axios";

function InternalServerErrorPage() {
	return <ErrorView {...ERROR_VIEW_PROPS_BY_ERROR_CODE[HttpStatusCode.InternalServerError]} />;
}

export default InternalServerErrorPage;
