import ProjectChip from "@/components/project/components/ProjectChip";
import {
	COLOR_BY_PROJECT_STATUS,
	LABEL_BY_PROJECT_STATUS,
} from "@/defines/forms/project/constants/project.constants.details";
import { ProjectStatusType } from "@/defines/forms/project/types";
import { ChipOwnProps } from "@mui/material";

interface ProjectStatusChipProps extends ChipOwnProps {
	currentStatus: ProjectStatusType;
}

function ProjectStatusChip(props: ProjectStatusChipProps) {
	const { currentStatus } = props;
	const label = LABEL_BY_PROJECT_STATUS[currentStatus];
	const color = COLOR_BY_PROJECT_STATUS[currentStatus];

	return <ProjectChip label={label} color={color} />;
}

export default ProjectStatusChip;
