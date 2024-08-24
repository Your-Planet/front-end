import ReactHookForm from "@/components/common/ReactHookForm";
import { PROJECT_FORM_LENGTH } from "@/defines/forms/project/constants";
import { ProjectCommonForm, ProjectFormFieldCommonProps } from "@/defines/forms/project/types";
import { Box, Chip } from "@mui/material";
import { Dayjs } from "dayjs";
import { ChangeEventHandler } from "react";
import { ArrayPath, useFieldArray, useFormContext } from "react-hook-form";

export interface ProjectPostStartDateProps extends ProjectFormFieldCommonProps {
	postStartDatesFormName: ArrayPath<ProjectCommonForm>;
}

function ProjectPostStartDate(props: ProjectPostStartDateProps) {
	const { formName, postStartDatesFormName, required, helperText } = props;

	const { control } = useFormContext<ProjectCommonForm>();

	const { fields, append, remove } = useFieldArray<ProjectCommonForm>({
		control,
		name: postStartDatesFormName,
	});

	const { DatePicker } = ReactHookForm<ProjectCommonForm>();

	const getIsAlreadySelectedDate = (selectedDate: string) => {
		return fields.find(({ date }) => date === selectedDate);
	};

	const getIsSelectedFull = () => {
		return fields.length === PROJECT_FORM_LENGTH.postStartDates.max;
	};

	const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
		const dayjs = e.target.value as unknown as Dayjs;

		const selectedDate = dayjs.format("YYYY-MM-DD");

		if (getIsAlreadySelectedDate(selectedDate) || getIsSelectedFull()) return;

		append({ date: selectedDate });
	};

	return (
		<Box>
			<DatePicker
				formName={formName}
				label="캠페인 실행일"
				required={required}
				helperText={helperText}
				rules={{
					onChange: handleChange,
				}}
				slotProps={{
					textField: {
						fullWidth: true,
						inputProps: {
							readOnly: true,
						},
					},
				}}
			/>
			<Box
				sx={{
					display: "flex",
					gap: "6px",
					marginTop: "8px",
				}}
			>
				{fields.map(({ id, date }) => (
					<Chip key={id} label={date} color="primary" />
				))}
			</Box>
		</Box>
	);
}

export default ProjectPostStartDate;
