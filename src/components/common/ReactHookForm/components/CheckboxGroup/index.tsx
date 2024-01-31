import { ReactHookFormProps } from "@/components/common/ReactHookForm/defines/types";
import useReactHookFormControl from "@/components/common/ReactHookForm/hooks/useReactHookFormControl";
import { Checkbox, CheckboxProps, FormControl, FormControlLabel, FormGroup, FormLabel } from "@mui/material";
import { FieldValues } from "react-hook-form";

export interface ReactHookFormCheckboxGroupProps<
	TFieldValues extends FieldValues,
	CheckboxValue extends string | number,
> extends ReactHookFormProps<TFieldValues>,
		Pick<CheckboxProps, "onChange"> {
	checkboxes: {
		value: CheckboxValue;
		checked: boolean;
		name: string;
		label?: string;
		onChange?: (checkedValues: CheckboxValue[]) => void;
	}[];
}

function ReactHookFormCheckboxGroup<TFieldValues extends FieldValues, CheckboxValue extends string | number>(
	props: ReactHookFormCheckboxGroupProps<TFieldValues, CheckboxValue>,
) {
	const { formName, checkboxes, onChange } = props;
	const { field, label, error, errorMessage } = useReactHookFormControl(props);

	return (
		<FormControl error={Boolean(error)}>
			{label && <FormLabel id={formName}>{label}</FormLabel>}
			<FormGroup {...field} aria-labelledby={formName}>
				{checkboxes.map(({ label, value, checked, name }) => (
					<FormControlLabel
						key={value}
						value={value}
						control={<Checkbox onChange={onChange} checked={checked} name={name} />}
						label={label}
					/>
				))}
			</FormGroup>
		</FormControl>
	);
}

export default ReactHookFormCheckboxGroup;
