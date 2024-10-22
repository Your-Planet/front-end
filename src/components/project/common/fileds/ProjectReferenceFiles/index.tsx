import ReactHookForm from "@/components/common/ReactHookForm";
import { ProjectCommonForm, ProjectFormFieldCommonProps } from "@/defines/forms/project/types";

export interface ProjectReferenceFilesProps extends ProjectFormFieldCommonProps<"referenceFiles"> {}

function ProjectReferenceFiles(props: ProjectReferenceFilesProps) {
	const { formName, required, helperText = "파일을 여기로 드래그하거나 클릭하여 탐색하세요." } = props;

	const { FileDropzone } = ReactHookForm<ProjectCommonForm>();

	return <FileDropzone formName={formName} helperText={helperText} label="참고 자료" required={required} />;
}

export default ProjectReferenceFiles;
