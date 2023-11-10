"use client";

import { SELECTED_FONT_COLOR, StyledHeaderTab } from "@/components/Header/defines";
import { Tabs } from "@mui/material";
import { scroller } from "react-scroll";
import { useState } from "react";
import { TabType } from "./defines/types";
import { usePathname, useRouter } from "next/navigation";

const Gnb = () => {
	const [selectedTab, setSelectedTab] = useState<TabType>("HOME");
	const pathname = usePathname();
	const router = useRouter();

	const scrollToTarget = (target: TabType) => {
		scroller.scrollTo(target, {
			smooth: true,
			duration: 800,
			offset: -78,
		});
	};

	const handleChange = (event: React.SyntheticEvent, newSelectedTab: TabType) => {
		setSelectedTab(newSelectedTab);

		if (newSelectedTab === "SEARCH") {
			router.push("/search");
		} else if (newSelectedTab === "POST_ME") {
			router.push("/post-me");
		} else {
			if (pathname !== "/") {
				router.push("/");
				setTimeout(() => {
					scrollToTarget(newSelectedTab);
				}, 100);
			} else {
				scrollToTarget(newSelectedTab);
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
			<StyledHeaderTab label="Home" value="HOME" />
			<StyledHeaderTab label="Our Work" value="OUR_WORK" />
			<StyledHeaderTab label="Our Team" value="OUR_TEAM" />
			<StyledHeaderTab label="Search" value="SEARCH" />
			<StyledHeaderTab label="Post ME" value="POST_ME" />
		</Tabs>
	);
};

export default Gnb;
