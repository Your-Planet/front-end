"use client";

import { SELECTED_FONT_COLOR, StyledHeaderTab } from "@/components/Header/defines";
import { Tabs } from "@mui/material";
import Link from "next/link";
import { useState } from "react";

const LeftSide = () => {
	const [selectedTab, setSelectedTab] = useState(0);

	const handleChange = (event: React.SyntheticEvent, newSelectedTab: number) => {
		setSelectedTab(newSelectedTab);

		if (newSelectedTab < 3) {
			if (newSelectedTab === 0) {
				const home = document.getElementById("home");
				home?.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
			} else if (newSelectedTab === 1) {
				const ourWork = document.getElementById("our-work");
				ourWork?.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
			} else if (newSelectedTab === 2) {
				const ourTeam = document.getElementById("our-team");
				ourTeam?.scrollIntoView({ behavior: "smooth", block: "start" });
			}
		}
	};

	return (
		<Tabs
			value={selectedTab}
			onChange={handleChange}
			TabIndicatorProps={{
				style: {
					backgroundColor: SELECTED_FONT_COLOR,
				},
			}}
		>
			<StyledHeaderTab label="Home" LinkComponent={Link} href="/" scroll={false} />
			<StyledHeaderTab label="Our Work" LinkComponent={Link} href="/#our-work" scroll={false} />
			<StyledHeaderTab label="Our Team" LinkComponent={Link} href="/#our-team" scroll={false} />
			<StyledHeaderTab label="Search" LinkComponent={Link} href="/search" />
			<StyledHeaderTab label="Post ME" LinkComponent={Link} href="/post-me" />
		</Tabs>
	);
};

export default LeftSide;
