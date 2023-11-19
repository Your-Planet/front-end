import { TextField, TextFieldProps } from "@mui/material";
import { ReactHookFormProps } from "@/components/common/ReactHookForm/defines/types";
import { FieldValues, useController, useFormContext } from "react-hook-form";
import { getObjectAtPath } from "@/utils/object";
import { ChangeEventHandler } from "react";
import { getRequiredErrorMessage } from "@/utils/react-hook-form/rule";

export interface ReactHookFormTextFieldProps<TFieldValues extends FieldValues>
	extends ReactHookFormProps<TFieldValues>,
		Omit<TextFieldProps, "onChange"> {}

function ReactHookFormTextField<TFieldValues extends FieldValues = FieldValues>(
	props: ReactHookFormTextFieldProps<TFieldValues>,
) {
	const { formName, rules, validator = () => true, required, label, ...rest } = props;

	const {
		formState: { errors },
	} = useFormContext();

	const {
		field: { onChange, ...field },
	} = useController({
		name: formName,
		rules: {
			...rules,
			required: required ? getRequiredErrorMessage() : false,
		},
	});

	const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
		if (!validator(e.target.value)) return;
		onChange(e);
	};

	const error = getObjectAtPath(errors, formName);
	const errorMessage = (error?.message as string) ?? " ";

	return (
		<TextField
			{...rest}
			{...field}
			label={`${label}${required ? " *" : ""}`}
			onChange={handleChange}
			error={Boolean(error)}
			helperText={errorMessage}
		/>
	);
}

export default ReactHookFormTextField;
