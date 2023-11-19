"use client";

import { Box } from "@mui/material";
import { NextPage } from "next";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";
import { LAYOUT_MARGIN_TOP } from "@/public/defines/";
import HomeVideo from "@/components/common/layout/Home/";
import OurWork from "@/components/common/layout/OurWork/";

const Home: NextPage = () => {
	const homeRef = useRef<HTMLDivElement>(null);
	const ourWorkRef = useRef<HTMLDivElement>(null);
	const ourTeamRef = useRef<HTMLDivElement>(null);
	const sectionId = useSearchParams().get("section");

	useEffect(() => {
		switch (sectionId) {
			case "our_work":
				if (ourWorkRef.current) {
					ourWorkRef.current.style.scrollMarginTop = `${LAYOUT_MARGIN_TOP}px`;
					ourWorkRef.current.scrollIntoView({ behavior: "smooth" });
				}
				break;
			case "our_team":
				if (ourTeamRef.current) {
					ourTeamRef.current.style.scrollMarginTop = `${LAYOUT_MARGIN_TOP}px`;
					ourTeamRef.current.scrollIntoView({ behavior: "smooth" });
				}
				break;
			default:
				if (sectionId === null && homeRef.current) {
					homeRef.current.style.scrollMarginTop = `${LAYOUT_MARGIN_TOP}px`;
					homeRef.current.scrollIntoView({ behavior: "smooth" });
				}
				break;
		}
	}, [sectionId, homeRef, ourWorkRef, ourTeamRef]);

	return (
		<Box>
			<div className="w-full h-screen">
				<section id="home" ref={homeRef}>
					<HomeVideo />
				</section>
			</div>
			<div className="w-full h-screen">
				<section id="our_work" ref={ourWorkRef}>
					<OurWork />
				</section>
			</div>
			<div className="w-full h-screen">
				<section id="our_team" ref={ourTeamRef}>
					Team
				</section>
			</div>
		</Box>
	);
};

export default Home;
