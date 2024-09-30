import ReactHookForm from "@/components/common/ReactHookForm";
import { ProjectCommonForm, ProjectFormFieldCommonProps } from "@/defines/forms/project/types";
import { useFormContext } from "react-hook-form";

export interface ProjectFinalCutsProps extends ProjectFormFieldCommonProps {}

function ProjectFinalPanel(props: ProjectFinalCutsProps) {
	const { formName } = props;
	const { TextField } = ReactHookForm<ProjectCommonForm>();
	const { getValues, setValue } = useFormContext<ProjectCommonForm>();
	// TODO: @나은찬 default panel 값 로드
	const defaultCuts = 1;
	const additionalCuts = getValues("additionalPanel.count");
	const finalPanel = defaultCuts + additionalCuts;
	const value = `총 ${finalPanel}컷 (기본 ${defaultCuts}컷 + 추가 ${additionalCuts}컷)`;

	setValue(formName, value);

	return <TextField formName={formName} label="최종 컷 수" InputProps={{ readOnly: true }} />;
}

export default ProjectFinalPanel;
