import ProjectTextField from "@/components/project/common/fileds/ProjectTextField";
import { PROJECT_FORM_WIDTH } from "@/defines/forms/project/constants";
import { Box } from "@mui/material";

function ProjectConfirmFormView() {
	// TODO: @나은찬 수정 필요
	return (
		<Box
			sx={{
				width: `${PROJECT_FORM_WIDTH}px`,
				display: "flex",
				flexDirection: "column",
				gap: "32px",
				paddingY: "2rem",
			}}
		>
			<ProjectTextField label="광고주명" text="마이 플래닛" />
			<ProjectTextField label="브랜드명" text="유어 플래닛" />
		</Box>
	);
}

export default ProjectConfirmFormView;
