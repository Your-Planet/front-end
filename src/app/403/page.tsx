import ErrorView from "@/components/error/ErrorView";
import { ERROR_VIEW_PROPS_BY_ERROR_CODE } from "@/components/error/defines/constants";
import { HttpStatusCode } from "axios";

function ForbiddenErrorPage() {
	return <ErrorView {...ERROR_VIEW_PROPS_BY_ERROR_CODE[HttpStatusCode.Forbidden]} />;
}

export default ForbiddenErrorPage;
