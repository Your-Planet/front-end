import { Typography } from "@mui/material";

type Props = {
	text: string;
};

function H4Bold(props: Props) {
	const { text } = props;

	return (
		<Typography className="font-bold" variant="h4">
			{text}
		</Typography>
	);
}

export default H4Bold;
