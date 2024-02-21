"use client";

import { MemberType } from "@/defines/member/types";
import { useAuthContext } from "@/providers/AuthProvider";
import { Box } from "@mui/material";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LABEL_BY_PAGE } from "./defines/constants";
import { StyledBox, StyledLink } from "./defines/styles";
import { PageType } from "./defines/types";

function Gnb() {
	const pathname = usePathname();
	const { jwtPayload } = useAuthContext();
	const [memberType, setMemberType] = useState<MemberType | null>(null);
	const [selectedPage, setSelectedPage] = useState<PageType>("HOME");

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
				setSelectedPage("NULL");
				break;
		}
	}, [pathname]);

	useEffect(() => {
		if (!jwtPayload) {
			setMemberType(null);
			return;
		}

		setMemberType(jwtPayload.memberType);
	}, [jwtPayload]);

	return (
		<Box className="flex">
			<StyledBox selected={selectedPage === "HOME"}>
				<StyledLink href="/" scroll={false} selected={selectedPage === "HOME"}>
					{LABEL_BY_PAGE.HOME}
				</StyledLink>
			</StyledBox>
			{(memberType === "ADVERTISER" || memberType === "ADMIN") && (
				<StyledBox selected={selectedPage === "SEARCH"}>
					<StyledLink href="/search" selected={selectedPage === "SEARCH"}>
						{LABEL_BY_PAGE.SEARCH}
					</StyledLink>
				</StyledBox>
			)}
			{(memberType === "AUTHOR" || memberType === "ADMIN") && (
				<StyledBox selected={selectedPage === "POST_ME"}>
					<StyledLink href="/post-me" selected={selectedPage === "POST_ME"}>
						{LABEL_BY_PAGE.POST_ME}
					</StyledLink>
				</StyledBox>
			)}
		</Box>
	);
}

export default Gnb;
