"use client";

import ProjectRequestFormProvider from "@/components/project/ProjectRequestFormView/providers/ProjectRequestFormProvider";
import ProjectDueDate from "@/components/project/common/fileds/ProjectDueDate";
import ProjectPostStartDate from "@/components/project/common/fileds/ProjectPostStartDate";
import { PROJECT_FORM_LENGTH, PROJECT_FORM_WIDTH } from "@/defines/forms/project/constants";
import { Box } from "@mui/material";

function ProjectRequestFormView() {
	return (
		<ProjectRequestFormProvider>
			<Box sx={{ width: `${PROJECT_FORM_WIDTH}px` }}>
				<form>
					<ProjectPostStartDate
						formName="postStartDate"
						postStartDatesFormName="postStartDates"
						helperText={`특정 날짜를 지정하거나, 아직 날짜가 정해지지 않은 경우 최대 ${PROJECT_FORM_LENGTH.postStartDates.max}개의 날짜를 제시할 수 있어요.`}
						required
					/>

					<ProjectDueDate formName="dueDate" helperText="최종 산출물을 수령해야 하는 날짜를 알려주세요." required />
				</form>
			</Box>
		</ProjectRequestFormProvider>
	);
}

export default ProjectRequestFormView;
