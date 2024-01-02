"use client";

import { Box } from "@mui/material";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import styled from "styled-components";
import {
	FONT_BOLD_WEIGHT,
	FONT_COLOR,
	FONT_NORMAL_WEIGHT,
	FONT_SIZE,
	MIN_WIDTH,
	SELECTED_FONT_COLOR,
} from "./defines/constants";

interface StyledLinkProps {
	selected: boolean;
}

const StyledLink = styled(Link)<StyledLinkProps>`
	min-width: ${MIN_WIDTH};
	font-size: ${FONT_SIZE};
	padding: 0;
	margin: 0 5px;
	color: ${(props) => (props.selected ? `${SELECTED_FONT_COLOR}` : `${FONT_COLOR}`)};
	font-weight: ${(props) => (props.selected ? `${FONT_BOLD_WEIGHT}` : `${FONT_NORMAL_WEIGHT}`)};
	text-decoration: none;
`;

const Gnb = () => {
	const pathname = usePathname();
	const searchParams = useSearchParams();

	return (
		<Box>
			<StyledLink href="/" scroll={false} selected={pathname === "/" && searchParams.get("section") === null}>
				Home
			</StyledLink>
			<StyledLink
				href={{ pathname: "/", query: { section: "our_work" } }}
				scroll={false}
				selected={pathname === "/" && searchParams.get("section") === "our_work"}
			>
				Our Work
			</StyledLink>
			<StyledLink
				href={{ pathname: "/", query: { section: "our_team" } }}
				scroll={false}
				selected={pathname === "/" && searchParams.get("section") === "our_team"}
			>
				Our Team
			</StyledLink>
			<StyledLink href="/search" selected={pathname === "/search"}>
				Search
			</StyledLink>
			<StyledLink href="/post-me" selected={pathname === "/post-me"}>
				Post ME
			</StyledLink>
		</Box>
	);
};

export default Gnb;
