import { TextField, TextFieldProps } from "@mui/material";
import { ReactHookFormProps } from "@/components/common/ReactHookForm/defines/types";
import { FieldValues, useController, useFormContext } from "react-hook-form";
import { getObjectAtPath } from "@/utils/object";
import { ChangeEventHandler } from "react";

export interface ReactHookFormTextFieldProps<TFieldValues extends FieldValues>
	extends ReactHookFormProps<TFieldValues>,
		Omit<TextFieldProps, "onChange"> {}

function ReactHookFormTextField<TFieldValues extends FieldValues = FieldValues>(
	props: ReactHookFormTextFieldProps<TFieldValues>,
) {
	const { formName, rules, validator = () => true, ...rest } = props;

	const {
		formState: { errors },
	} = useFormContext();

	const {
		field: { onChange, ...field },
	} = useController({ name: formName, rules });

	const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
		if (!validator(e.target.value)) return;
		onChange(e);
	};

	const errorMessage = getObjectAtPath(errors, formName)?.message as string;

	return (
		<TextField {...rest} {...field} onChange={handleChange} error={Boolean(errorMessage)} helperText={errorMessage} />
	);
}

export default ReactHookFormTextField;
