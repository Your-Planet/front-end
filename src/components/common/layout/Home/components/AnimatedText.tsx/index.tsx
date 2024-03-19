import { Typography, TypographyOwnProps } from "@mui/material";
import { AnimationType } from "../../defines/types";

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
			variant={variant}
			style={{ animationDelay: `${delay}ms !important` }}
		>
			{text}
		</Typography>
	);
}

export default AnimatedText;
