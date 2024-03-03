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

export interface ReactHookFormCheckboxGroupProps<
	TFieldValues extends FieldValues,
	CheckboxValue extends string | number,
> extends ReactHookFormProps<TFieldValues>,
		Pick<CheckboxProps, "onChange"> {
	label?: string;
	checkboxes: {
		value: CheckboxValue;
		label?: string;
		checked?: boolean;
	}[];
	row?: boolean;
}

function ReactHookFormCheckboxGroup<TFieldValues extends FieldValues, CheckboxValue extends string | number>(
	props: ReactHookFormCheckboxGroupProps<TFieldValues, CheckboxValue>,
) {
	const { formName, label, checkboxes, row = false, onChange } = props;
	const { restProps, field, error, errorMessage } = useReactHookFormControl(props);

	return (
		<FormControl error={Boolean(error)}>
			{label && <FormLabel id={formName}>{label}</FormLabel>}
			<FormGroup row={row} {...field} aria-labelledby={formName}>
				{checkboxes.map(({ label, value, checked = false }) => (
					<FormControlLabel
						key={value || label}
						control={<Checkbox {...restProps} onChange={onChange} checked={checked} />}
						label={label || value}
					/>
				))}
			</FormGroup>
			{errorMessage && <FormHelperText>{errorMessage}</FormHelperText>}
		</FormControl>
	);
}

export default ReactHookFormCheckboxGroup;
