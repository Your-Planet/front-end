"use client";

import Link from "next/link";
import { Box } from "@mui/material";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { PageType } from "./defines/types";
import { usePathname } from "next/navigation";
import {
	SELECTED_PAGE_COLOR,
	MIN_WIDTH,
	FONT_SIZE,
	FONT_COLOR,
	FONT_NORMAL_WEIGHT,
	FONT_BOLD_WEIGHT,
	HEADER_HEIGHT,
} from "./defines/constants";

interface StyledBoxProps {
	selected: boolean;
}

interface StyledLinkProps {
	selected: boolean;
}

const StyledBox = styled(Box)<StyledBoxProps>`
	display: flex;
	justify-content: center;
	align-items: center;
	height: ${HEADER_HEIGHT}px;
	border-bottom: ${(props) => (props.selected ? `2px solid ${SELECTED_PAGE_COLOR}` : "none")};
	box-sizing: border-box;
`;

const StyledLink = styled(Link)<StyledLinkProps>`
	min-width: ${MIN_WIDTH};
	font-size: ${FONT_SIZE};
	padding: 0;
	margin: 0 5px;
	color: ${(props) => (props.selected ? `${SELECTED_PAGE_COLOR}` : `${FONT_COLOR}`)};
	font-weight: ${(props) => (props.selected ? `${FONT_BOLD_WEIGHT}` : `${FONT_NORMAL_WEIGHT}`)};
	text-decoration: none;
`;

function Gnb() {
	const pathname = usePathname();
	const [selectedPage, setSelectedPage] = useState<PageType>(null);

	useEffect(() => {
		switch (pathname) {
			case "/":
				setSelectedPage("HOME");
				break;
			case "/search":
				setSelectedPage("SEARCH");
				break;
			case "/post-me":
				setSelectedPage("POST_ME");
				break;
			default:
				setSelectedPage(null);
				break;
		}
	}, [pathname]);

	return (
		<>
			<Box className="flex">
				<StyledBox selected={selectedPage === "HOME"}>
					<StyledLink href="/" scroll={false} selected={selectedPage === "HOME"}>
						Home
					</StyledLink>
				</StyledBox>
				<StyledBox selected={selectedPage === "SEARCH"}>
					<StyledLink href="/search" selected={selectedPage === "SEARCH"}>
						Search
					</StyledLink>
				</StyledBox>
				<StyledBox selected={selectedPage === "POST_ME"}>
					<StyledLink href="/post-me" selected={selectedPage === "POST_ME"}>
						Post ME
					</StyledLink>
				</StyledBox>
			</Box>
		</>
	);
}

export default Gnb;
