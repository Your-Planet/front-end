"use client";

import { SELECTED_FONT_COLOR, StyledHeaderTab } from "@/components/Header/defines";
import { Tabs } from "@mui/material";
import Link from "next/link";
import { useRef, useState } from "react";
import { TabType } from "./defines/types";

const Gnb = () => {
	const [selectedTab, setSelectedTab] = useState<TabType>("HOME");

	const handleChange = (event: React.SyntheticEvent, newSelectedTab: TabType) => {
		setSelectedTab(newSelectedTab);

		if (newSelectedTab === "HOME") {
			const home = document.getElementById("home");
			home?.scrollIntoView({ behavior: "smooth", block: "start" });
		} else if (newSelectedTab === "OUR_WORK") {
			const ourWork = document.getElementById("our-work");
			ourWork?.scrollIntoView({ behavior: "smooth", block: "start" });
		} else if (newSelectedTab === "OUR_TEAM") {
			const ourTeam = document.getElementById("our-team");
			ourTeam?.scrollIntoView({ behavior: "smooth", block: "start" });
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
			<StyledHeaderTab label="Home" LinkComponent={Link} href="/" value="HOME" scroll={false} />
			<StyledHeaderTab label="Our Work" LinkComponent={Link} value="OUR_WORK" href="/#our-work" scroll={false} />
			<StyledHeaderTab label="Our Team" LinkComponent={Link} value="OUR_TEAM" href="/#our-team" scroll={false} />
			<StyledHeaderTab label="Search" LinkComponent={Link} href="/search" />
			<StyledHeaderTab label="Post ME" LinkComponent={Link} href="/post-me" />
		</Tabs>
	);
};

export default Gnb;
