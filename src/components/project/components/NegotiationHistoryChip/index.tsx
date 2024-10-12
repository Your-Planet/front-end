import {
	PROJECT_TAB_HEIGHT as PROJECT_CHIP_HEIGHT,
	PROJECT_TAB_WIDTH as PROJECT_CHIP_WIDTH,
} from "@/defines/forms/project/constants";
import { Chip, ChipOwnProps } from "@mui/material";

interface NegotiationChipProps extends ChipOwnProps {}

function NegotiationHistoryChip(props: NegotiationChipProps) {
	const { disabled = false, color, label } = props;

	return (
		<Chip
			label={label}
			disabled={disabled}
			color={color}
			size="small"
			sx={{ fontWeight: "bold", width: `${PROJECT_CHIP_WIDTH}px`, height: `${PROJECT_CHIP_HEIGHT}px` }}
		/>
	);
}

export default NegotiationHistoryChip;
