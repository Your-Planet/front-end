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

	const sectionRefs = {
		home: homeRef,
		our_work: ourWorkRef,
		our_team: ourTeamRef,
	};

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

		const handleIntersection = (entries: IntersectionObserverEntry[]) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					const sectionId = entry.target.id;
					const changedUrl = sectionId === "home" ? "/" : `/?section=${sectionId}`;

					history.replaceState({ pathname: "/", section: sectionId }, "", changedUrl);
				}
			});
		};

		const observer = new IntersectionObserver(handleIntersection, {
			threshold: 0.8,
		});

		Object.values(sectionRefs).forEach((sectionRef) => {
			if (sectionRef.current) {
				observer.observe(sectionRef.current);
			}
		});

		return () => {
			observer.disconnect();
		};
	}, [sectionId, homeRef, ourWorkRef, ourTeamRef, sectionRefs]);

	return (
		<Box>
			<div className="w-full section-height">
				<section id="home" ref={homeRef}>
					<HomeVideo />
				</section>
			</div>
			<div className="w-full section-height">
				<section id="our_work" ref={ourWorkRef}>
					<OurWork />
				</section>
			</div>
			<div className="w-full section-height">
				<section id="our_team" ref={ourTeamRef}>
					<OurTeam />
				</section>
			</div>
		</Box>
	);
};

export default Home;
