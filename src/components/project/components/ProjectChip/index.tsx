import { PROJECT_CHIP_HEIGHT, PROJECT_CHIP_WIDTH } from "@/defines/forms/project/constants";
import { Chip, ChipOwnProps } from "@mui/material";

function ProjectChip(props: ChipOwnProps) {
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

export default ProjectChip;
