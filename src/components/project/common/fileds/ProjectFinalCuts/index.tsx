import ReactHookForm from "@/components/common/ReactHookForm";
import { ProjectCommonForm, ProjectFormFieldCommonProps } from "@/defines/forms/project/types";
import { useFormContext } from "react-hook-form";

export interface ProjectBrandNameProps extends ProjectFormFieldCommonProps {}

function ProjectFinalCuts(props: ProjectBrandNameProps) {
	const { formName } = props;
	const { TextField } = ReactHookForm<ProjectCommonForm>();
	const { getValues } = useFormContext<ProjectCommonForm>();
	// TODO: @나은찬 default cuts 값 로드
	const defaultCuts = 1;
	const additionalCuts = getValues("additionalPanel.count");
	const finalCuts = defaultCuts + additionalCuts;
	const value = `총 ${finalCuts}컷 (기본 ${defaultCuts}컷 + 추가 ${additionalCuts}컷)`;

	return <TextField formName={formName} label="최종 컷 수" value={value} InputProps={{ readOnly: true }} />;
}

export default ProjectFinalCuts;
