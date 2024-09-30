import ReactHookForm from "@/components/common/ReactHookForm";
import { PROJECT_FORM_LENGTH } from "@/defines/forms/project/constants";
import { ProjectCommonForm, ProjectFormFieldCommonProps } from "@/defines/forms/project/types";
import { getMaxLengthPlaceholder, getMaxLengthRule } from "@/utils/react-hook-form/rule";

const { max } = PROJECT_FORM_LENGTH.message;

function ProjectMessage(props: ProjectFormFieldCommonProps) {
	const { formName, helperText, readOnly } = props;

	const { TextField } = ReactHookForm<ProjectCommonForm>();

	return (
		<TextField
			formName={formName}
			label="기타 요청사항"
			rules={getMaxLengthRule(max)}
			placeholder={`궁금한 내용이나 작가에게 별도로 요청하고 싶은 내용이 있다면 작성해 주세요. 최대 ${getMaxLengthPlaceholder(
				max,
			)}`}
			fullWidth
			multiline
			rows={10}
			characterCountable
			helperText={helperText}
			InputProps={{ readOnly }}
		/>
	);
}

export default ProjectMessage;
