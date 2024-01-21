import { Typography } from "@mui/material";

type Props = {
	children: string;
	color?: string; // tailwindcss
	bold?: boolean;
};

function H4(props: Props) {
	const { children, color, bold } = props;

	return (
		<Typography className={`${bold ? "font-bold" : ""} ${color}`} variant="h4">
			{children}
		</Typography>
	);
}

export default H4;
