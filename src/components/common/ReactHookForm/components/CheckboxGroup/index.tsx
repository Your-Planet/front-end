import { ReactHookFormProps } from "@/components/common/ReactHookForm/defines/types";
import useReactHookFormControl from "@/components/common/ReactHookForm/hooks/useReactHookFormControl";
import { Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel } from "@mui/material";
import { FieldValues } from "react-hook-form";

export interface ReactHookFormCheckboxGroupProps<
	TFieldValues extends FieldValues,
	CheckboxValue extends string | number,
> extends ReactHookFormProps<TFieldValues> {
	label?: string;
	checkboxes: {
		value: CheckboxValue;
		label?: string;
	}[];
	row?: boolean;
}

function ReactHookFormCheckboxGroup<TFieldValues extends FieldValues, CheckboxValue extends string | number>(
	props: ReactHookFormCheckboxGroupProps<TFieldValues, CheckboxValue>,
) {
	const { formName, label, checkboxes, row = false } = props;
	const { restProps, field, error, errorMessage, handleChange } = useReactHookFormControl(props);

	return (
		<FormControl error={Boolean(error)}>
			{label && <FormLabel id={formName}>{label}</FormLabel>}
			<FormGroup row={row} {...restProps} {...field} aria-labelledby={formName}>
				{checkboxes.map(({ label, value }) => (
					<FormControlLabel key={value} control={<Checkbox onChange={handleChange} />} label={label || value} />
				))}
			</FormGroup>
			{errorMessage && <FormHelperText>{errorMessage}</FormHelperText>}
		</FormControl>
	);
}

export default ReactHookFormCheckboxGroup;
