"use client";

import ProjectAdditionalModification from "@/components/project/common/fileds/ProjectAdditionalModification";
import ProjectAdditionalPanel from "@/components/project/common/fileds/ProjectAdditionalPanel";
import ProjectBrandName from "@/components/project/common/fileds/ProjectBrandName";
import ProjectCampaignDescription from "@/components/project/common/fileds/ProjectCampaignDescription";
import ProjectDueDate from "@/components/project/common/fileds/ProjectDueDate";
import ProjectMessage from "@/components/project/common/fileds/ProjectMessage";
import ProjectOfferPrice from "@/components/project/common/fileds/ProjectOfferPrice";
import ProjectOriginFile from "@/components/project/common/fileds/ProjectOriginFile";
import ProjectPostDurationExtension from "@/components/project/common/fileds/ProjectPostDurationExtension";
import ProjectPostStartDate from "@/components/project/common/fileds/ProjectPostStartDate";
import ProjectReferenceUrls from "@/components/project/common/fileds/ProjectReferenceUrls";
import ProjectRefinement from "@/components/project/common/fileds/ProjectRefinement";
import { PROJECT_FORM_LENGTH, PROJECT_FORM_WIDTH } from "@/defines/forms/project/constants";
import { Box } from "@mui/material";

function ProjectRequestFormView() {
	return (
		<form>
			<Box
				sx={{
					width: `${PROJECT_FORM_WIDTH}px`,
					display: "flex",
					flexDirection: "column",
					gap: "32px",
					paddingY: "2rem",
				}}
			>
				<ProjectAdditionalPanel
					formName="additionalPanel.count"
					isNegotiableFormName="additionalPanel.isNegotiable"
					// TODO: 나은찬 작가가 제공하는 기본 컷수 넘겨주기
					helperText={`기본 컷 수 N장이 제공돼요. 컷 수만 선택해 주세요.`}
					required
				/>

				<ProjectAdditionalModification
					formName="additionalModification.count"
					// TODO: 나은찬 작가가 제공하는 기본 수정 횟수
					helperText={`기본 수정 N회가 제공돼요. 추가할 횟수만 선택해 주세요.`}
					required
				/>

				<ProjectOriginFile
					formName="originFile.demandType"
					helperText="요청 시 최종 작업물의 원본 파일을 받을 수 있어요."
					required
				/>

				<ProjectRefinement
					formName="refinement.demandType"
					helperText={`원작자의 허락 없이 임의로 2차적 저작물을 작성하는 경우 2차적 저작물 작성권을 침해하게 됩니다.\n꼭 작가의 활용 동의를 받은 후 활용해 주세요.`}
					required
				/>

				<ProjectPostDurationExtension
					formName="postDurationExtension.months"
					// TODO: 나은찬 작가 기본 업로드 기간 제공
					helperText={`기본 N개월 업로드가 보장돼요. 추가할 기간만 한 달 단위로 선택해 주세요.`}
					required
				/>

				<ProjectPostStartDate
					formName="postStartDate"
					helperText={`특정 날짜를 지정하거나, 아직 날짜가 정해지지 않은 경우 최대 ${PROJECT_FORM_LENGTH.postStartDates.max}개의 날짜를 제시할 수 있어요.`}
					required
				/>

				<ProjectDueDate formName="dueDate" helperText="최종 산출물을 수령해야 하는 날짜를 알려주세요." required />

				<ProjectBrandName formName="brandName" required />

				<ProjectCampaignDescription formName="campaignDescription" required />

				<ProjectReferenceUrls formName="referenceUrls" getItemFormName={(index) => `referenceUrls.${index}.url`} />

				<ProjectOfferPrice formName="offerPrice" required />

				<ProjectMessage formName="message" />
			</Box>
		</form>
	);
}

export default ProjectRequestFormView;
