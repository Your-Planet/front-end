import { ReactHookFormProps } from "@/components/common/ReactHookForm/defines/types";
import useReactHookFormControl from "@/components/common/ReactHookForm/hooks/useReactHookFormControl";
import { TextField, TextFieldProps } from "@mui/material";
import { FieldValues } from "react-hook-form";

export interface ReactHookFormTextFieldProps<TFieldValues extends FieldValues>
	extends ReactHookFormProps<TFieldValues>,
		Omit<TextFieldProps, "onChange" | "label" | "required"> {}

function ReactHookFormTextField<TFieldValues extends FieldValues = FieldValues>(
	props: ReactHookFormTextFieldProps<TFieldValues>,
) {
	const { restProps, field, label, error, errorMessage, handleChange } = useReactHookFormControl(props);

	return (
		<TextField
			{...field}
			{...restProps}
			label={label}
			onChange={handleChange}
			error={props.error ?? Boolean(error)}
			helperText={props.helperText ?? errorMessage}
		/>
	);
}

export default ReactHookFormTextField;
