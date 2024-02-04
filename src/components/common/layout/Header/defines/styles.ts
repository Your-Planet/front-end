import { Box, Button, styled } from "@mui/material";
import Link from "next/link";
import { ERROR_COLOR } from "../../../../../defines/common/constants";
import {
	FONT_BOLD_WEIGHT,
	FONT_COLOR,
	FONT_NORMAL_WEIGHT,
	FONT_SIZE,
	HEADER_HEIGHT,
	MIN_WIDTH,
	SELECTED_PAGE_COLOR,
} from "./constants";

interface StyledBoxProps {
	selected: boolean;
}

interface StyledLinkProps {
	selected: boolean;
}

export const StyledHeaderLink = styled(Link)({
	fontSize: FONT_SIZE,
	color: FONT_COLOR,
	textDecoration: "none",
	margin: "0 5px",
});

export const StyledHeaderButton = styled(Button)({
	fontSize: FONT_SIZE,
	color: FONT_COLOR,
	":hover": {
		backgroundColor: "transparent",
	},
});

export const StyledDropdownMenuItemNormal = styled(Link)({
	fontSize: FONT_SIZE,
	color: SELECTED_PAGE_COLOR,
	textDecoration: "none",
});

export const StyledDropdownMenuItemError = styled(StyledDropdownMenuItemNormal)({
	color: ERROR_COLOR,
});

export const StyledBox = styled(Box)<StyledBoxProps>`
	display: flex;
	justify-content: center;
	align-items: center;
	height: ${HEADER_HEIGHT}px;
	border-bottom: ${(props) => (props.selected ? `2px solid ${SELECTED_PAGE_COLOR}` : "none")};
	box-sizing: border-box;
`;

export const StyledLink = styled(Link)<StyledLinkProps>`
	min-width: ${MIN_WIDTH};
	font-size: ${FONT_SIZE};
	padding: 0;
	margin: 0 5px;
	color: ${(props) => (props.selected ? `${SELECTED_PAGE_COLOR}` : `${FONT_COLOR}`)};
	font-weight: ${(props) => (props.selected ? `${FONT_BOLD_WEIGHT}` : `${FONT_NORMAL_WEIGHT}`)};
	text-decoration: none;
	text-align: center;
`;
