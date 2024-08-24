import { ReactHookFormProps } from "@/components/common/ReactHookForm/defines/types";
import useReactHookFormControl from "@/components/common/ReactHookForm/hooks/useReactHookFormControl";
import { TextField, TextFieldProps } from "@mui/material";
import { forwardRef } from "react";
import { FieldValues } from "react-hook-form";
import { NumericFormat, NumericFormatProps } from "react-number-format";

interface CustomProps {
	onChange: (event: { target: { name: string; value: string } }) => void;
	name: string;
}

export interface ReactHookFormNumericTextFieldProps<TFieldValues extends FieldValues>
	extends ReactHookFormProps<TFieldValues>,
		Omit<TextFieldProps, "onChange" | "label" | "required"> {}

const NumericFormatCustom = forwardRef<NumericFormatProps, CustomProps>(function NumericFormatCustom(props, ref) {
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

function ReactHookFormNumericTextField<TFieldValues extends FieldValues = FieldValues>(
	props: ReactHookFormNumericTextFieldProps<TFieldValues>,
) {
	const { restProps, field, label, error, errorMessage, handleChange } = useReactHookFormControl(props);
	const { error: errorFromProps, helperText } = props;
	const { InputProps } = restProps;

	return (
		<TextField
			{...field}
			{...restProps}
			label={label}
			onChange={handleChange}
			error={errorFromProps ?? Boolean(error)}
			helperText={helperText ?? errorMessage}
			InputProps={{
				...InputProps,
				inputComponent: NumericFormatCustom as any,
			}}
		/>
	);
}

export default ReactHookFormNumericTextField;
