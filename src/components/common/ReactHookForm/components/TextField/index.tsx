import CharacterCounter from "@/components/common/ReactHookForm/components/TextField/components/CharacterCounter";
import { ReactHookFormProps } from "@/components/common/ReactHookForm/defines/types";
import useReactHookFormControl from "@/components/common/ReactHookForm/hooks/useReactHookFormControl";
import { TextField, TextFieldProps } from "@mui/material";
import { forwardRef } from "react";
import { FieldValues } from "react-hook-form";
import { NumericFormat, NumericFormatProps } from "react-number-format";

export interface ReactHookFormTextFieldProps<TFieldValues extends FieldValues>
	extends ReactHookFormProps<TFieldValues>,
		Omit<TextFieldProps, "onChange" | "label" | "required"> {
	characterCountable?: boolean;
	numericFormat?: boolean;
}

interface NumericProps {
	onChange: (event: { target: { name: string; value: string } }) => void;
	name: string;
}

const NumericFormatCustom = forwardRef<NumericFormatProps, NumericProps>(function NumericFormatCustom(props, ref) {
	const { onChange, name, ...other } = props;

	return (
		<NumericFormat
			{...other}
			getInputRef={ref}
			onValueChange={(values) => {
				onChange({
					target: {
						name,
						value: values.value,
					},
				});
			}}
			thousandSeparator
			valueIsNumericString
		/>
	);
});

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
				helperText={helperText ?? errorMessage}
				InputProps={{
					endAdornment:
						InputProps?.endAdornment ||
						(characterCountable && <CharacterCounter rules={rules} length={field.value.length} hasError={hasError} />),
					inputComponent: numericFormat && (NumericFormatCustom as any),
				}}
			/>
		</>
	);
}

export default ReactHookFormTextField;
