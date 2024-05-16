import { AnimationType } from "@/components/common/layout/Home/defines/types";
import { Typography, TypographyOwnProps } from "@mui/material";

interface Props extends TypographyOwnProps {
	text: string;
	animate: AnimationType;
	delay?: string;
	margin?: string;
}

function AnimatedText(props: Props) {
	const { text, animate, delay = "0", margin = "", variant = "h1" } = props;

	return (
		<Typography
			className={`font-black ${animate} animate-duration-[1500ms] animate-ease-linear ${margin}`}
			fontFamily="Futura-pt-bold-oblique"
			variant={variant}
			style={{ animationDelay: `${delay}ms !important` }}
		>
			{text}
		</Typography>
	);
}

export default AnimatedText;
