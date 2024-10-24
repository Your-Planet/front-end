import { PROJECT_HISTORY_CHIP_HEIGHT, PROJECT_HISTORY_CHIP_WIDTH } from "@/defines/forms/project/constants";
import { Chip, ChipOwnProps } from "@mui/material";

interface NegotiationHistoryStepBarProps extends ChipOwnProps {
	label: string;
	isCurrentStep?: boolean;
}

function NegotiationHistoryStepBar(props: NegotiationHistoryStepBarProps) {
	const { disabled = false, label, isCurrentStep = false } = props;
	const variant = isCurrentStep ? "filled" : "outlined";
	const color = isCurrentStep ? "primary" : "default";

	return (
		<Chip
			variant={variant}
			color={color}
			disabled={disabled}
			size="small"
			sx={{
				cursor: "default",
				width: `${PROJECT_HISTORY_CHIP_WIDTH}px`,
				height: `${PROJECT_HISTORY_CHIP_HEIGHT}px`,
				fontWeight: "bold",
				borderRadius: 1,
			}}
			label={label}
		/>
	);
}

export default NegotiationHistoryStepBar;
