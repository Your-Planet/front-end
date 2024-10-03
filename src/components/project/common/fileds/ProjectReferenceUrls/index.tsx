import DynamicAppend from "@/components/common/DynamicAppend";
import ProjectReferenceUrlTextField from "@/components/project/common/fileds/ProjectReferenceUrls/components/ProjectReferenceUrlTextField";
import { DEFAULT_PROJECT_REFERENCE_URL, PROJECT_FORM_LENGTH } from "@/defines/forms/project/constants";
import { ProjectCommonForm, ProjectFormFieldCommonProps } from "@/defines/forms/project/types";
import { ArrayPath, FieldPath } from "react-hook-form";

export interface ProjectReferenceUrlsProps extends Omit<ProjectFormFieldCommonProps, "formName" | "helperText"> {
	formName: ArrayPath<ProjectCommonForm>;
	getItemFormName: (index: number) => FieldPath<ProjectCommonForm>;
}

const { max } = PROJECT_FORM_LENGTH.referenceUrls;

function ProjectReferenceUrls(props: ProjectReferenceUrlsProps) {
	const { formName, required, getItemFormName } = props;

	return (
		<DynamicAppend<ProjectCommonForm>
			label="참고 URL"
			formName={formName}
			component={({ index }) => <ProjectReferenceUrlTextField formName={getItemFormName(index)} />}
			maxCount={max}
			defaultValue={DEFAULT_PROJECT_REFERENCE_URL}
			required={required}
		/>
	);
}

export default ProjectReferenceUrls;
