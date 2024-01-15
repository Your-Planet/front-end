import { ReactNode, useMemo } from "react";
import Slider, { Settings } from "react-slick";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

interface Props {
	children: ReactNode;
	setting?: Object | {};
}

function SlickSlider(props: Props) {
	const { children, setting } = props;

	const settings = useMemo<Settings>(
		() => ({
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
			...setting,
		}),
		[],
	);

	return (
		<section className="relative">
			<Slider {...settings}>{children}</Slider>
		</section>
	);
}

export default SlickSlider;
