import { Link, Tab } from "@mui/material";
import { styled } from "@mui/system";

const TAB_HEIGHT = "72px";
const MIN_WIDTH = "35px";
const LOGO_SIZE = "45px";
const FONT_COLOR = "rgba(33, 33, 33, 0.5)";
const FONT_SIZE = "14px";
const FONT_WEIGHT = "550";

export const SELECTED_FONT_COLOR = "#212121";

export const StyledHeaderTab = styled(Tab)({
	height: TAB_HEIGHT,
	minWidth: MIN_WIDTH,
	fontSize: FONT_SIZE,
	textTransform: "none",
	padding: "0",
	margin: "0 5px",
	"&.Mui-selected": {
		color: SELECTED_FONT_COLOR,
		fontWeight: FONT_WEIGHT,
	},
});

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
