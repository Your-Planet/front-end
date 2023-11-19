import { FieldValues, useController, useFormContext } from "react-hook-form";
import { ReactHookFormProps } from "@/components/common/ReactHookForm/defines/types";
import {
	FormControl,
	FormControlLabel,
	FormHelperText,
	FormLabel,
	Radio,
	RadioGroup,
	RadioGroupProps,
} from "@mui/material";
import { getObjectAtPath } from "@/utils/object";

export interface ReactHookFormRadioGroupProps<TFieldValues extends FieldValues, RadioValue extends string | number>
	extends ReactHookFormProps<TFieldValues>,
		Omit<RadioGroupProps, "onChange"> {
	label?: string;
	radios: {
		value: RadioValue;
		label?: string;
	}[];
}

function ReactHookFormRadioGroup<TFieldValues extends FieldValues, RadioValue extends string | number>(
	props: ReactHookFormRadioGroupProps<TFieldValues, RadioValue>,
) {
	const { formName, rules, label, radios, ...rest } = props;

	const {
		formState: { errors },
	} = useFormContext();

	const { field } = useController({ name: formName, rules });

	const errorMessage = getObjectAtPath(errors, formName)?.message as string;

	return (
		<FormControl error={Boolean(errorMessage)}>
			{label && <FormLabel id={formName}>{label}</FormLabel>}
			<RadioGroup {...rest} {...field} aria-labelledby={formName} name={formName}>
				{radios.map(({ label, value }) => (
					<FormControlLabel key={value} value={value} control={<Radio />} label={label} />
				))}
			</RadioGroup>
			{errorMessage && <FormHelperText>{errorMessage}</FormHelperText>}
		</FormControl>
	);
}

export default ReactHookFormRadioGroup;
