import ReactHookForm from "@/components/common/ReactHookForm";
import { PROJECT_FORM_LENGTH } from "@/defines/forms/project/constants";
import { ProjectCommonForm, ProjectFormFieldCommonProps } from "@/defines/forms/project/types";
import { getMaxLengthPlaceholder, getMaxLengthRule } from "@/utils/react-hook-form/rule";

export interface ProjectCampaignDescriptionProps extends ProjectFormFieldCommonProps {}

const { max } = PROJECT_FORM_LENGTH.campaignDescription;

function ProjectCampaignDescription(props: ProjectCampaignDescriptionProps) {
	const { formName, required, helperText } = props;

	const { TextField } = ReactHookForm<ProjectCommonForm>();

	return (
		<TextField
			formName={formName}
			label="캠페인 소개"
			required={required}
			rules={getMaxLengthRule(max)}
			placeholder={`작가가 캠페인에 대해 이해할 수 있도록 캠페인 이름, 목적 등 필요한 정보를 알려주세요. ${getMaxLengthPlaceholder(
				max,
			)}`}
			fullWidth
			multiline
			rows={10}
			characterCountable
			helperText={helperText}
		/>
	);
}

export default ProjectCampaignDescription;
