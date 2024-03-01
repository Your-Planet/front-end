import { styled } from "@mui/material";
import Link from "next/link";
import { FONT_COLOR, FONT_SIZE } from "./constants";

export const StyledHeaderLink = styled(Link)({
	fontSize: FONT_SIZE,
	color: FONT_COLOR,
	textDecoration: "none",
	margin: "0 5px",
});
