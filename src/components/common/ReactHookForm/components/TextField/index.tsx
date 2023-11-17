import { TextField, TextFieldProps } from "@mui/material";
import { ReactHookFormProps } from "@/components/common/ReactHookForm/defines/types";
import { FieldValues, useController, useFormContext } from "react-hook-form";
import { getObjectAtPath } from "@/utils/object";

export interface ReactHookFormTextFieldProps<TFieldValues extends FieldValues>
	extends ReactHookFormProps<TFieldValues>,
		Omit<TextFieldProps, "onChange"> {}

function ReactHookFormTextField<TFieldValues extends FieldValues = FieldValues>(
	props: ReactHookFormTextFieldProps<TFieldValues>,
) {
	const { formName, rules, ...rest } = props;

	const {
		formState: { errors },
	} = useFormContext();

	const { field } = useController({ name: formName, rules });

	const errorMessage = getObjectAtPath(errors, formName)?.message as string;

	return <TextField {...rest} {...field} error={Boolean(errorMessage)} helperText={errorMessage} />;
}

export default ReactHookFormTextField;
