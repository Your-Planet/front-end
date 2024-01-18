import { Typography } from "@mui/material";

type Props = {
	text: string;
	color?: string; // tailwindcss
};

function H5Bold(props: Props) {
	const { text, color } = props;

	return (
		<Typography className={`font-bold ${color}`} variant="h5">
			{text}
		</Typography>
	);
}

export default H5Bold;
