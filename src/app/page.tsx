"use client";

import { Box } from "@mui/material";
import { NextPage } from "next";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";
import { HEADER_HEIGHT } from "../../public/defines/index";
import HomeVideo from "@/components/common/layout/Home/";
import OurWork from "@/components/common/layout/OurWork/";
import OurTeam from "@/components/common/layout/OurTeam/index";

const Home: NextPage = () => {
	const homeRef = useRef<HTMLDivElement>(null);
	const ourWorkRef = useRef<HTMLDivElement>(null);
	const ourTeamRef = useRef<HTMLDivElement>(null);
	const sectionId = useSearchParams().get("section");

	useEffect(() => {
		switch (sectionId) {
			case "our_work":
				if (ourWorkRef.current) {
					ourWorkRef.current.style.scrollMarginTop = `${HEADER_HEIGHT}px`;
					ourWorkRef.current.scrollIntoView({ behavior: "smooth" });
				}
				break;
			case "our_team":
				if (ourTeamRef.current) {
					ourTeamRef.current.style.scrollMarginTop = `${HEADER_HEIGHT}px`;
					ourTeamRef.current.scrollIntoView({ behavior: "smooth" });
				}
				break;
			default:
				if (sectionId === null && homeRef.current) {
					homeRef.current.style.scrollMarginTop = `${HEADER_HEIGHT}px`;
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
					<OurTeam />
				</section>
			</div>
		</Box>
	);
};

export default Home;
