import { ReactHookFormProps } from "@/components/common/ReactHookForm/defines/types";
import useReactHookFormControl from "@/components/common/ReactHookForm/hooks/useReactHookFormControl";
import { Checkbox, CheckboxProps, FormControl, FormControlLabel, FormHelperText } from "@mui/material";
import { FieldValues } from "react-hook-form";

export interface ReactHookFormCheckboxProps<TFieldValues extends FieldValues, CheckboxValue extends string | number>
	extends ReactHookFormProps<TFieldValues>,
		Omit<CheckboxProps, "onChange" | "label" | "required"> {
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function ReactHookFormCheckbox<TFieldValues extends FieldValues, CheckboxValue extends string | number>(
	props: ReactHookFormCheckboxProps<TFieldValues, CheckboxValue>,
) {
	const { restProps, field, label, error, errorMessage, handleChange } = useReactHookFormControl(props);
	const { onChange: additionalOnChange } = props;

	const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		handleChange(e);

		if (additionalOnChange) {
			additionalOnChange(e);
		}
	};

	return (
		<FormControl error={Boolean(error)}>
			<FormControlLabel
				control={<Checkbox {...restProps} {...field} checked={field.value} onChange={handleCheckboxChange} />}
				onClick={(e) => e.stopPropagation()}
				label={label}
			/>
			{errorMessage && <FormHelperText>{errorMessage}</FormHelperText>}
		</FormControl>
	);
}

export default ReactHookFormCheckbox;
