import ErrorView from "@/components/error/ErrorView";
import { ERROR_VIEW_PROPS_BY_ERROR_CODE } from "@/components/error/defines/constants";
import { HttpStatusCode } from "axios";

function NotFoundErrorPage() {
	return <ErrorView {...ERROR_VIEW_PROPS_BY_ERROR_CODE[HttpStatusCode.NotFound]} />;
}

export default NotFoundErrorPage;
