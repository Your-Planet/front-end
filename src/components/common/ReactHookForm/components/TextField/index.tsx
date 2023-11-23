import { TextField, TextFieldProps } from "@mui/material";
import { ReactHookFormProps } from "@/components/common/ReactHookForm/defines/types";
import { FieldValues } from "react-hook-form";
import useReactHookFormControl from "@/components/common/ReactHookForm/hooks/useReactHookFormControl";

export interface ReactHookFormTextFieldProps<TFieldValues extends FieldValues>
	extends ReactHookFormProps<TFieldValues>,
		Omit<TextFieldProps, "onChange" | "label" | "required"> {}

function ReactHookFormTextField<TFieldValues extends FieldValues = FieldValues>(
	props: ReactHookFormTextFieldProps<TFieldValues>,
) {
	const { restProps, field, label, error, errorMessage, handleChange } = useReactHookFormControl(props);

	return (
		<TextField
			{...restProps}
			{...field}
			label={label}
			onChange={handleChange}
			error={Boolean(error)}
			helperText={errorMessage}
		/>
	);
}

export default ReactHookFormTextField;
