import { Button, ButtonOwnProps } from "@mui/material";

interface TabProps extends ButtonOwnProps {
	text: string;
	height?: string;
}

function Tab(props: TabProps) {
	const { variant = "outlined", disabled = false, color, size, text, height } = props;

	return (
		<Button
			variant={variant}
			disabled={disabled}
			color={color}
			size={size}
			disableTouchRipple
			disableRipple
			sx={{
				cursor: "default",
				maxHeight: height,
				fontWeight: "bold",
				"&:active": {
					transform: "none",
				},
			}}
		>
			{text}
		</Button>
	);
}

export default Tab;
