import ReactHookForm from "@/components/common/ReactHookForm";
import { ProjectCommonForm, ProjectFormFieldCommonProps } from "@/defines/forms/project/types";

export interface ProjectDueDateProps extends ProjectFormFieldCommonProps {}

function ProjectDueDate(props: ProjectDueDateProps) {
	const { formName, required, helperText } = props;

	const { DatePicker } = ReactHookForm<ProjectCommonForm>();

	return (
		<DatePicker
			formName={formName}
			label="작업 기한"
			required={required}
			helperText={helperText}
			slotProps={{
				textField: {
					fullWidth: true,
				},
			}}
			disablePast
		/>
	);
}

export default ProjectDueDate;
