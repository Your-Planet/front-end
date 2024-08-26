"use client";

import ProjectRequestFormProvider from "@/components/project/ProjectRequestFormView/providers/ProjectRequestFormProvider";
import AdditionalModification from "@/components/project/common/fileds/AdditionalModification";
import AdditionalPanel from "@/components/project/common/fileds/AdditionalPanel";
import OriginFile from "@/components/project/common/fileds/OriginFile";
import ProjectPostStartDate from "@/components/project/common/fileds/ProjectPostStartDate";
import { PROJECT_FORM_LENGTH, PROJECT_FORM_WIDTH } from "@/defines/forms/project/constants";
import { Box } from "@mui/material";

function ProjectRequestFormView() {
	return (
		<ProjectRequestFormProvider>
			<Box sx={{ width: `${PROJECT_FORM_WIDTH}px` }}>
				<form>
					<AdditionalPanel
						formName="additionalPanel"
						// TODO: 나은찬 작가가 제공하는 기본 컷수 넘겨주기
						helperText={`기본 컷 수 N장이 제공돼요. 컷 수만 선택해 주세요.`}
						required
					/>

					<AdditionalModification
						formName="additionalModification"
						// TODO: 나은찬 작가가 제공하는 기본 수정 횟수
						helperText={`기본 수정 N회가 제공돼요.  추가할 횟수만 선택해 주세요.`}
						required
					/>

					<OriginFile
						formName="originFile.demandType"
						helperText="요청 시 최종 작업물의 원본 파일을 받을 수 있어요."
						required
					/>

					<ProjectPostStartDate
						formName="postStartDate"
						postStartDatesFormName="postStartDates"
						helperText={`특정 날짜를 지정하거나, 아직 날짜가 정해지지 않은 경우 최대 ${PROJECT_FORM_LENGTH.postStartDates.max}개의 날짜를 제시할 수 있어요.`}
						required
					/>
				</form>
			</Box>
		</ProjectRequestFormProvider>
	);
}

export default ProjectRequestFormView;
