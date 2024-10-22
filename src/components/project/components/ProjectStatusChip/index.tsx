import ProjectChip from "@/components/project/components/ProjectChip";
import { ColorType } from "@/defines/common/types";
import { ProjectStatusType } from "@/defines/forms/project/types";
import { deepFreeze } from "@/utils/object";
import { ChipOwnProps } from "@mui/material";

interface ProjectStatusChipProps extends ChipOwnProps {
	currentStatus: ProjectStatusType;
}

const LABEL_BY_PROJECT_STATUS: Record<ProjectStatusType, string> = deepFreeze({
	NEED_REPLY: "회신 팔요",
	IN_PROGRESS: "진행 중",
	SENT: "발송 완료",
	DELAYED: "발송 지연",
	REQUEST_MODIFICATION: "수정 요청",
});

const COLOR_BY_PROJECT_STATUS: Record<ProjectStatusType, ColorType> = deepFreeze({
	NEED_REPLY: "error",
	IN_PROGRESS: "default",
	SENT: "primary",
	DELAYED: "warning",
	REQUEST_MODIFICATION: "success",
});

function ProjectStatusChip(props: ProjectStatusChipProps) {
	const { currentStatus } = props;
	const label = LABEL_BY_PROJECT_STATUS[currentStatus];
	const color = COLOR_BY_PROJECT_STATUS[currentStatus];

	return <ProjectChip label={label} color={color} />;
}

export default ProjectStatusChip;
