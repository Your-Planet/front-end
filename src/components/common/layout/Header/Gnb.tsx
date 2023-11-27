"use client";

import { SELECTED_PAGE_COLOR, MIN_WIDTH, FONT_SIZE, FONT_COLOR, FONT_NORMAL_WEIGHT, FONT_BOLD_WEIGHT } from "./defines";
import Link from "next/link";
import { Box } from "@mui/material";
import styled from "styled-components";
import { useRef, useState } from "react";
import { PageType } from "./defines/types";
import { HEADER_HEIGHT } from "../../../../../public/defines/index";

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

const Gnb = () => {
	const [selectedPage, setSelectedPage] = useState<PageType>("HOME");
	const homeRef = useRef(null);
	const ourWorkRef = useRef(null);
	const ourTeamRef = useRef(null);
	const searchRef = useRef(null);
	const postRef = useRef(null);

	const handleClickMenu = (newSelectedPage: PageType) => {
		setSelectedPage(newSelectedPage);
	};

	return (
		<Box className="flex">
			<StyledBox selected={selectedPage === "HOME"}>
				<StyledLink href="/" scroll={false} onClick={() => handleClickMenu("HOME")} selected={selectedPage === "HOME"}>
					Home
				</StyledLink>
			</StyledBox>
			<StyledBox selected={selectedPage === "OUR_WORK"}>
				<StyledLink
					href={{ pathname: "/", query: { section: "our_work" } }}
					scroll={false}
					onClick={() => handleClickMenu("OUR_WORK")}
					selected={selectedPage === "OUR_WORK"}
				>
					Our Work
				</StyledLink>
			</StyledBox>
			<StyledBox selected={selectedPage === "OUR_TEAM"}>
				<StyledLink
					href={{ pathname: "/", query: { section: "our_team" } }}
					scroll={false}
					onClick={() => handleClickMenu("OUR_TEAM")}
					selected={selectedPage === "OUR_TEAM"}
				>
					Our Team
				</StyledLink>
			</StyledBox>
			<StyledBox selected={selectedPage === "SEARCH"}>
				<StyledLink href="/search" onClick={() => handleClickMenu("SEARCH")} selected={selectedPage === "SEARCH"}>
					Search
				</StyledLink>
			</StyledBox>
			<StyledBox selected={selectedPage === "POST"}>
				<StyledLink href="/post-me" onClick={() => handleClickMenu("POST")} selected={selectedPage === "POST"}>
					Post ME
				</StyledLink>
			</StyledBox>
		</Box>
	);
};

export default Gnb;
