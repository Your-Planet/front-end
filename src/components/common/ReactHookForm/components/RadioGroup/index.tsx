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
import { getRequiredErrorMessage } from "@/utils/react-hook-form/rule";

export interface ReactHookFormRadioGroupProps<TFieldValues extends FieldValues, RadioValue extends string | number>
	extends ReactHookFormProps<TFieldValues>,
		Omit<RadioGroupProps, "onChange"> {
	label?: string;
	radios: {
		value: RadioValue;
		label?: string;
	}[];
	required?: boolean;
}

function ReactHookFormRadioGroup<TFieldValues extends FieldValues, RadioValue extends string | number>(
	props: ReactHookFormRadioGroupProps<TFieldValues, RadioValue>,
) {
	const { formName, rules, label, radios, required, ...rest } = props;

	const {
		formState: { errors },
	} = useFormContext();

	const { field } = useController({
		name: formName,
		rules: {
			...rules,
			required: required ? getRequiredErrorMessage() : false,
		},
	});

	const error = getObjectAtPath(errors, formName);
	const errorMessage = (error?.message as string) ?? " ";

	return (
		<FormControl error={Boolean(error)}>
			{label && (
				<FormLabel id={formName}>
					{label}
					{required && " *"}
				</FormLabel>
			)}
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
