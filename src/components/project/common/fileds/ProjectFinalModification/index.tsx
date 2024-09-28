import ReactHookForm from "@/components/common/ReactHookForm";
import { ProjectCommonForm, ProjectFormFieldCommonProps } from "@/defines/forms/project/types";
import { useFormContext } from "react-hook-form";

export interface ProjectFinalModificationProps extends ProjectFormFieldCommonProps {}

function ProjectFinalModification(props: ProjectFinalModificationProps) {
	const { formName } = props;
	const { TextField } = ReactHookForm<ProjectCommonForm>();
	const { getValues } = useFormContext<ProjectCommonForm>();
	// TODO: @나은찬 default modification 값 로드
	const defaultModification = 1;
	const additionalModification = getValues("additionalModification.count");
	const finalModification = defaultModification + additionalModification;
	const value = `총 ${finalModification}회 (기본 ${defaultModification}회 + 추가 ${additionalModification}회)`;

	return <TextField formName={formName} label="최종 수정 횟수" value={value} InputProps={{ readOnly: true }} />;
}

export default ProjectFinalModification;
