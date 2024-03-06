import { ReactHookFormProps } from "@/components/common/ReactHookForm/defines/types";
import useReactHookFormControl from "@/components/common/ReactHookForm/hooks/useReactHookFormControl";
import {
	Checkbox,
	CheckboxProps,
	FormControl,
	FormControlLabel,
	FormGroup,
	FormHelperText,
	FormLabel,
} from "@mui/material";
import { FieldValues } from "react-hook-form";

export interface ReactHookFormCheckboxProps<TFieldValues extends FieldValues, CheckboxValue extends string | number>
	extends ReactHookFormProps<TFieldValues>,
		Pick<CheckboxProps, "onChange"> {
	label?: string;
	checkbox: {
		value: CheckboxValue;
		checkboxLabel?: string;
		checked?: boolean;
	};
	row?: boolean;
}

function ReactHookFormCheckbox<TFieldValues extends FieldValues, CheckboxValue extends string | number>(
	props: ReactHookFormCheckboxProps<TFieldValues, CheckboxValue>,
) {
	const { formName, label, checkbox, row = false, onChange } = props;
	const { restProps, field, error, errorMessage } = useReactHookFormControl(props);
	const { value, checkboxLabel, checked } = checkbox;

	return (
		<FormControl error={Boolean(error)}>
			{label && <FormLabel id={formName}>{label}</FormLabel>}
			<FormGroup row={row} {...field} aria-labelledby={formName}>
				<FormControlLabel
					key={value || checkboxLabel}
					control={<Checkbox {...restProps} onChange={onChange} checked={checked} />}
					label={checkboxLabel || value}
				/>
			</FormGroup>
			{errorMessage && <FormHelperText>{errorMessage}</FormHelperText>}
		</FormControl>
	);
}

export default ReactHookFormCheckbox;
