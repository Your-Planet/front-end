"use client";

import ProjectBrandName from "@/components/project/common/fileds/ProjectBrandName";
import ProjectFinalModification from "@/components/project/common/fileds/ProjectFinalModification";
import ProjectFinalPanel from "@/components/project/common/fileds/ProjectFinalPanel";
import ProjectSponsorName from "@/components/project/common/fileds/ProjectSponsorName";
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
			<ProjectSponsorName formName="sponsorName" />
			<ProjectBrandName formName="brandName" readOnly />
			<ProjectFinalPanel formName="finalPanel" />
			<ProjectFinalModification formName="finalModification" />
		</Box>
	);
}

export default ProjectConfirmFormView;
