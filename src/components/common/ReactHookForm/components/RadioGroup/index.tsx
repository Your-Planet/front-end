import { ReactHookFormProps } from "@/components/common/ReactHookForm/defines/types";
import useReactHookFormControl from "@/components/common/ReactHookForm/hooks/useReactHookFormControl";
import {
	FormControl,
	FormControlLabel,
	FormHelperText,
	FormLabel,
	Radio,
	RadioGroup,
	RadioGroupProps,
} from "@mui/material";
import { FieldValues } from "react-hook-form";

export interface ReactHookFormRadioGroupProps<TFieldValues extends FieldValues, RadioValue extends string | number>
	extends ReactHookFormProps<TFieldValues>,
		Omit<RadioGroupProps, "onChange"> {
	radios: {
		value: RadioValue;
		label?: string;
	}[];
}

function ReactHookFormRadioGroup<TFieldValues extends FieldValues, RadioValue extends string | number>(
	props: ReactHookFormRadioGroupProps<TFieldValues, RadioValue>,
) {
	const { formName, radios } = props;
	const { restProps, field, label, error, errorMessage, handleChange } = useReactHookFormControl(props);

	return (
		<FormControl error={Boolean(error)}>
			{label && <FormLabel id={formName}>{label}</FormLabel>}
			<RadioGroup {...restProps} {...field} aria-labelledby={formName} name={formName} onChange={handleChange}>
				{radios.map(({ label, value }) => (
					<FormControlLabel key={value} value={value} control={<Radio />} label={label} />
				))}
			</RadioGroup>
			{errorMessage && <FormHelperText>{errorMessage}</FormHelperText>}
		</FormControl>
	);
}

export default ReactHookFormRadioGroup;
