import { ReactNode } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

interface Props {
	children: ReactNode;
	setting?: Object | {};
}

function SlickSlider(props: Props) {
	const { children, setting } = props;

	return <Slider {...setting}>{children}</Slider>;
}

export default SlickSlider;
