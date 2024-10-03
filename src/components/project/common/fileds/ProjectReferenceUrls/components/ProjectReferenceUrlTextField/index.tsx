import ReactHookForm from "@/components/common/ReactHookForm";
import { ProjectCommonForm, ProjectFormFieldCommonProps } from "@/defines/forms/project/types";
import { getUrlValidateRule } from "@/utils/react-hook-form/rule";

export interface ProjectReferenceUrlTextFieldProps extends Pick<ProjectFormFieldCommonProps, "formName"> {}

function ProjectReferenceUrlTextField(props: ProjectReferenceUrlTextFieldProps) {
	const { formName } = props;

	const { TextField } = ReactHookForm<ProjectCommonForm>();

	return (
		<TextField
			formName={formName}
			rules={getUrlValidateRule()}
			label=""
			placeholder="참고할만한 URL이 있다면 작성해 주세요."
			fullWidth
		/>
	);
}

export default ProjectReferenceUrlTextField;
