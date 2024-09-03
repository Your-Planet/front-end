import ReactHookForm from "@/components/common/ReactHookForm";
import { PROJECT_FORM_LENGTH } from "@/defines/forms/project/constants";
import { ProjectCommonForm, ProjectFormFieldCommonProps } from "@/defines/forms/project/types";
import { Box, Chip } from "@mui/material";
import { Dayjs } from "dayjs";
import { ChangeEventHandler, useEffect } from "react";
import { ArrayPath, useFieldArray, useFormContext } from "react-hook-form";

export interface ProjectPostStartDateProps extends ProjectFormFieldCommonProps {
	postStartDatesFormName: ArrayPath<ProjectCommonForm>;
}

const { min, max } = PROJECT_FORM_LENGTH.postStartDates;

function ProjectPostStartDate(props: ProjectPostStartDateProps) {
	const { formName, postStartDatesFormName, required, helperText } = props;

	const {
		control,
		clearErrors,
		formState: { errors },
		setError,
		register,
	} = useFormContext<ProjectCommonForm>();

	const { fields, append, remove } = useFieldArray<ProjectCommonForm>({
		control,
		name: postStartDatesFormName,
	});

	register("postStartDates", {
		validate(value) {
			if (value.length > max) {
				return `최대 ${max}까지만 선택할 수 있어요.`;
			}
			if (value.length < min) {
				return `최소 ${min}개 이상 선택해 주세요.`;
			}

			return true;
		},
	});

	const { DatePicker } = ReactHookForm<ProjectCommonForm>();

	const getIsAlreadySelectedDate = (selectedDate: string) => {
		return fields.find(({ date }) => date === selectedDate);
	};

	const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
		const dayjs = e.target.value as unknown as Dayjs;

		const selectedDate = dayjs.format("YYYY-MM-DD");

		if (getIsAlreadySelectedDate(selectedDate)) return;

		append({ date: selectedDate });
	};

	const getHandleDelete = (index: number) => () => {
		remove(index);
	};

	useEffect(() => {
		if (errors.postStartDates?.root) {
			setError("postStartDate", errors.postStartDates.root);
		} else {
			clearErrors("postStartDate");
		}
	}, [errors.postStartDates]);

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
					height: "32px",
				}}
			>
				{fields.map(({ id, date }, i) => (
					<Chip
						key={id}
						label={date}
						color={errors.postStartDate ? "error" : "primary"}
						variant="outlined"
						onDelete={getHandleDelete(i)}
					/>
				))}
			</Box>
		</Box>
	);
}

export default ProjectPostStartDate;
