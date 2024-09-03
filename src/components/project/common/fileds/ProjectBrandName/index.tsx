import ReactHookForm from "@/components/common/ReactHookForm";
import { PROJECT_FORM_LENGTH } from "@/defines/forms/project/constants";
import { ProjectCommonForm, ProjectFormFieldCommonProps } from "@/defines/forms/project/types";
import { getMaxLengthPlaceholder, getMaxLengthRule, getMinLengthRule } from "@/utils/react-hook-form/rule";

export interface ProjectBrandNameProps extends ProjectFormFieldCommonProps {}

const { min, max } = PROJECT_FORM_LENGTH.brandName;

function ProjectBrandName(props: ProjectBrandNameProps) {
	const { formName, required, helperText } = props;

	const { TextField } = ReactHookForm<ProjectCommonForm>();

	return (
		<TextField
			formName={formName}
			label="브랜드명"
			required={required}
			helperText={helperText}
			rules={{
				...getMaxLengthRule(max),
				...getMinLengthRule(min),
			}}
			placeholder={getMaxLengthPlaceholder(max)}
			fullWidth
		/>
	);
}

export default ProjectBrandName;
