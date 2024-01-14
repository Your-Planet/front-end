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
	autoplay?: boolean | number;
	speed?: number;
	loop?: boolean;
}

function SlickSlider(props: Props) {
	const { children, autoplay = false, speed = 300, loop = true } = props;

	const settings = useMemo<Settings>(
		() => ({
			dots: true,
			infinite: false,
			speed: 800,
			slidesToShow: 3,
			slidesToScroll: 3,
			initialSlide: 0,
		}),
		[autoplay, loop, speed],
	);

	return (
		<SlideWrapper>
			<Slider {...settings}>{children}</Slider>
		</SlideWrapper>
	);
}

export default SlickSlider;
