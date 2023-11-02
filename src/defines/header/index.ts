import { Box, Tab } from "@mui/material";
import { styled } from "@mui/system";
import { dividerColor } from "../common";

const height = "72px";
const minWidth = "35px";

export const HeaderBox = styled(Box)({
	display: "flex",
	justifyContent: "space-around",
	alignItems: "center",
	height,
	borderBottom: `1px solid ${dividerColor}`,
});

export const HeaderTab = styled(Tab)({
	minWidth,
	width: "fit-content",
	padding: "0",
	margin: "0 5px",
	height,
});
