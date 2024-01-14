import { ReactNode, useMemo } from "react";
import Slider, { Settings } from "react-slick";
import styled from "styled-components";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const SlideWrapper = styled.section`
	position: relative;
`;

interface Props {
	children: ReactNode;
	className?: string;
	autoplay?: boolean | number;
	speed?: number;
	loop?: boolean;
}

function SlickSlider(props: Props) {
	const { children, className, autoplay = true, speed = 300, loop = true } = props;

	const settings = useMemo<Settings>(
		() => ({
			dots: true,
			infinite: loop,
			speed: speed,
			slidesToShow: 1,
			autoplay: Boolean(autoplay),
			autoplaySpeed: typeof autoplay === "boolean" ? 3000 : autoplay,
		}),
		[autoplay, loop, speed],
	);

	return (
		<SlideWrapper className={className}>
			<Slider {...settings}>{children}</Slider>
		</SlideWrapper>
	);
}

export default SlickSlider;
