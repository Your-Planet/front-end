import ReactHookForm from "@/components/common/ReactHookForm";
import { ProjectCommonForm, ProjectFormFieldCommonProps } from "@/defines/forms/project/types";
import dayjs, { Dayjs } from "dayjs";

export interface ProjectDueDateProps extends ProjectFormFieldCommonProps {}

function ProjectDueDate(props: ProjectDueDateProps) {
	const { formName, required, helperText } = props;

	const { DatePicker } = ReactHookForm<ProjectCommonForm>();

	const validate = (value: Dayjs) => {
		if (!value.isAfter(dayjs(), "day")) {
			return "오늘 이후의 날짜를 선택해주세요.";
		}
		return true;
	};

	return (
		<DatePicker
			formName={formName}
			label="작업 기한"
			required={required}
			helperText={helperText}
			rules={{
				validate,
			}}
			slotProps={{
				textField: {
					fullWidth: true,
				},
			}}
		/>
	);
}

export default ProjectDueDate;
