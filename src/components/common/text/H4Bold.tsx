import { Typography } from "@mui/material";

type Props = {
	text: string;
	color?: string; // tailwindcss
};

function H4Bold(props: Props) {
	const { text, color } = props;

	return (
		<Typography className={`font-bold ${color}`} variant="h4">
			{text}
		</Typography>
	);
}

export default H4Bold;
