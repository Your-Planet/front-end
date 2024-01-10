import { ReactHookFormProps } from "@/components/common/ReactHookForm/defines/types";
import useReactHookFormControl from "@/components/common/ReactHookForm/hooks/useReactHookFormControl";
import { DatePicker, DatePickerProps } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { FieldValues } from "react-hook-form";

type TDate = dayjs.Dayjs;

export interface ReactHookFormDatePickerProps<TFieldValues extends FieldValues>
	extends ReactHookFormProps<TFieldValues>,
		Omit<DatePickerProps<TDate>, "onChange" | "label"> {}
function ReactHookFormDatePicker<TFieldValues extends FieldValues = FieldValues>(
	props: ReactHookFormDatePickerProps<TFieldValues>,
) {
	const { restProps, field, label, error, errorMessage } = useReactHookFormControl(props);

	return (
		<DatePicker<TDate>
			{...restProps}
			{...field}
			label={label}
			slotProps={{
				textField: {
					error: Boolean(error),
					helperText: errorMessage,
				},
			}}
			format="YYYY/MM/DD"
		/>
	);
}

export default ReactHookFormDatePicker;
