import { Box } from "@mui/material";
import { cloneElement } from "react";
import { useInView } from "react-intersection-observer";
import H4 from "../../text/H4";
import Card from "./Card";

function OurTeam() {
	const useInViewOption = {
		triggerOnce: true,
		threshold: 0.4,
	};
	const [boxRef, boxInView] = useInView(useInViewOption);

	const slidingCards = () => {
		const cards = [
			<Card
				key="마켓팅"
				text="마켓팅"
				backgroundColor="bg-indigo-300"
				imageSrc="/images/marketing.png"
				imageAlt="marketing"
			/>,
			<Card
				key="거래"
				text="거래"
				backgroundColor="bg-yellow-300"
				imageSrc="/images/business.png"
				imageAlt="business"
			/>,
			<Card
				key="대금처리"
				text="대금처리"
				backgroundColor="bg-lime-300"
				imageSrc="/images/process.png"
				imageAlt="process"
			/>,
			<Card
				key="사후처리"
				text="사후처리"
				backgroundColor="bg-orange-300"
				imageSrc="/images/after_service.png"
				imageAlt="after_service"
			/>,
		];

		const duplicatedCards = cards.map((card) => cloneElement(card, { key: `duplicated-${card.props.text}` }));

		return [...cards, ...duplicatedCards];
	};

	return (
		<>
			<Box
				className={`w-full h-screen px-[150px] relative select-none ${
					boxInView ? "animate-fade-up animate-delay-300" : "opacity-0"
				}`}
				ref={boxRef}
			>
				<Box className="flex flex-col items-center justify-center w-full h-except-header">
					<H4 bold>직접 경험해보세요</H4>
					<Box className="flex w-full items-center overflow-hidden h-[300px] whitespace-nowrap relative before:absolute before:top-0 before:w-[30px] before:h-full before:content-[''] before:z-10 before:left-0 before:bg-gradient-to-l before:from-white/0 before:to-white after:absolute after:top-0 after:w-[30px] after:h-full after:content-[''] after:z-10 after:right-0 after:bg-gradient-to-r after:from-white/0 after:to-white hover:pause">
						<Box className={`flex ${boxInView ? "" : "pause"} hover:pause animate-slide animate-delay-[1500ms]`}>
							{slidingCards()}
						</Box>
					</Box>
				</Box>
			</Box>
		</>
	);
}

export default OurTeam;
