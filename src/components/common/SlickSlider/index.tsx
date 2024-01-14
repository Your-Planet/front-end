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
			infinite: true,
			speed: 500,
			slidesToShow: 4,
			slidesToScroll: 4,
			initialSlide: 0,
			variableWidth: true,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3,
						infinite: true,
						dots: true,
					},
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
						initialSlide: 2,
					},
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					},
				},
			],
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
