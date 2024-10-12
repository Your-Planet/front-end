import { Button, ButtonOwnProps } from "@mui/material";

interface NegotiationHistoryTabProps extends ButtonOwnProps {
	text: string;
	height?: string;
}

function NegotiationHistoryTab(props: NegotiationHistoryTabProps) {
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

export default NegotiationHistoryTab;
