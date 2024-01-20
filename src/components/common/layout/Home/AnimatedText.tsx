import { Typography, TypographyOwnProps } from "@mui/material";

interface Props extends TypographyOwnProps {
	text: string;
	animate: string;
	delay?: string;
	margin?: string;
}

function AnimatedText(props: Props) {
	const { text, animate, delay = 0, margin = "", variant = "h1" } = props;

	return (
		<Typography
			className={`font-black animate-${animate} animate-duration-[1.5s] animate-delay-[${delay}ms] animate-ease-linear ${margin}`}
			variant={variant}
		>
			{text}
		</Typography>
	);
}

export default AnimatedText;
