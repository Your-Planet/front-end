import { styled } from "@mui/system";
import Link from "next/link";

const TAB_HEIGHT = "72px";
const LOGO_SIZE = "45px";

export const FONT_BOLD_WEIGHT = "550";
export const FONT_NORMAL_WEIGHT = "400";
export const MIN_WIDTH = "35px";
export const FONT_COLOR = "rgba(33, 33, 33, 0.5)";
export const FONT_SIZE = "14px";

export const SELECTED_PAGE_COLOR = "#212121";

export const StyledHeaderLink = styled(Link)({
	fontSize: FONT_SIZE,
	color: FONT_COLOR,
	textDecoration: "none",
	margin: "0 5px",
});

export const StyledHeaderLogo = styled(Link)({
	fontSize: LOGO_SIZE,
	color: "black",
	fontWeight: "bold",
	textDecoration: "none",
});
