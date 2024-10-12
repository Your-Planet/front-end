import { PROJECT_TAB_HEIGHT, PROJECT_TAB_WIDTH } from "@/defines/forms/project/constants";
import { Button, ButtonOwnProps } from "@mui/material";

interface NegotiationHistoryTabProps extends ButtonOwnProps {
	text: string;
}

function NegotiationHistoryTab(props: NegotiationHistoryTabProps) {
	const { variant = "outlined", disabled = false, text } = props;

	return (
		<Button
			variant={variant}
			disabled={disabled}
			size="small"
			disableTouchRipple
			disableRipple
			sx={{
				cursor: "default",
				width: `${PROJECT_TAB_WIDTH}px`,
				height: `${PROJECT_TAB_HEIGHT}px`,
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
