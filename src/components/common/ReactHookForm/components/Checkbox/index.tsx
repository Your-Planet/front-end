import { StyledFormControlLabel } from "@/components/common/ReactHookForm/components/Checkbox/defines/styles";
import { ReactHookFormProps } from "@/components/common/ReactHookForm/defines/types";
import useReactHookFormControl from "@/components/common/ReactHookForm/hooks/useReactHookFormControl";
import { Checkbox, CheckboxProps, FormControl, FormHelperText } from "@mui/material";
import { FieldValues } from "react-hook-form";

export interface ReactHookFormCheckboxProps<TFieldValues extends FieldValues, CheckboxValue extends string | number>
	extends ReactHookFormProps<TFieldValues>,
		Omit<CheckboxProps, "onChange" | "label" | "required"> {}

function ReactHookFormCheckbox<TFieldValues extends FieldValues, CheckboxValue extends string | number>(
	props: ReactHookFormCheckboxProps<TFieldValues, CheckboxValue>,
) {
	const { restProps, field, label, error, errorMessage, handleChange } = useReactHookFormControl(props);

	return (
		<FormControl error={Boolean(error)}>
			<StyledFormControlLabel
				control={<Checkbox {...restProps} {...field} checked={field.value} onChange={handleChange} />}
				onClick={(e) => e.stopPropagation()}
				label={label}
			/>
			{errorMessage && <FormHelperText>{errorMessage}</FormHelperText>}
		</FormControl>
	);
}

export default ReactHookFormCheckbox;
