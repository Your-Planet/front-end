import CharacterCounter from "@/components/common/ReactHookForm/components/TextField/components/CharacterCounter";
import { NumericFormatInput } from "@/components/common/ReactHookForm/components/TextField/components/NumericFormat";
import { ReactHookFormProps } from "@/components/common/ReactHookForm/defines/types";
import useReactHookFormControl from "@/components/common/ReactHookForm/hooks/useReactHookFormControl";
import { TextField, TextFieldProps } from "@mui/material";
import { FieldValues } from "react-hook-form";

export interface ReactHookFormTextFieldProps<TFieldValues extends FieldValues>
	extends ReactHookFormProps<TFieldValues>,
		Omit<TextFieldProps, "onChange" | "label" | "required"> {
	characterCountable?: boolean;
	numericFormat?: boolean;
}

function ReactHookFormTextField<TFieldValues extends FieldValues = FieldValues>(
	props: ReactHookFormTextFieldProps<TFieldValues>,
) {
	const { restProps, field, label, error, errorMessage, handleChange } = useReactHookFormControl(props);
	const { error: errorFromProps, helperText, characterCountable, numericFormat, rules } = props;
	const { InputProps } = restProps;

	const hasError = Boolean(error);

	return (
		<>
			<TextField
				{...field}
				{...restProps}
				label={label}
				onChange={handleChange}
				error={errorFromProps ?? Boolean(error)}
				helperText={errorMessage === " " ? helperText : errorMessage}
				InputProps={{
					endAdornment:
						InputProps?.endAdornment ||
						(characterCountable && <CharacterCounter rules={rules} length={field.value.length} hasError={hasError} />),
					inputComponent: numericFormat && (NumericFormatInput as any),
				}}
			/>
		</>
	);
}

export default ReactHookFormTextField;
