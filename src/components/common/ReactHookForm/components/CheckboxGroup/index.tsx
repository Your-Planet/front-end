import { ERROR_COLOR } from "@/defines/common/constants";
import {
	Checkbox,
	FormControl,
	FormControlLabel,
	FormGroup,
	FormHelperText,
	FormLabel as MuiFormLabel,
} from "@mui/material";
import React from "react";
import { FieldValues, UseControllerProps, useController, useWatch } from "react-hook-form";

export interface ReactHookFormCheckboxGroupProps {
	config: {
		label: string;
		value: string;
	};
	control: UseControllerProps<FieldValues>["control"];
	label?: string;
	name: string;
	options: Array<{ [key: string]: string }>;
	row?: boolean;
	disabled?: boolean;
	setValue: (value: any) => void;
}

const ReactHookFormCheckboxGroup: React.FC<ReactHookFormCheckboxGroupProps> = ({
	config,
	control,
	label,
	name,
	options,
	row,
	disabled,
	...rest
}) => {
	const {
		field: { ref, value, onChange, ...inputProps },
		formState: { errors },
	} = useController({
		name,
		control,
		defaultValue: [],
	});

	const checkboxIds = useWatch({ control, name }) || [];

	const formHelperTextStyle = {
		color: ERROR_COLOR,
		margin: 0,
	};

	const handleChange = (value: string) => {
		const newArray = [...checkboxIds];
		const item = value;

		if (newArray.length > 0) {
			const index = newArray.findIndex((x) => x === item);

			if (index === -1) {
				newArray.push(item);
			} else {
				newArray.splice(index, 1);
			}
		} else {
			newArray.push(item);
		}

		onChange(newArray);
	};

	return (
		<FormControl>
			{label && <MuiFormLabel id={name}>{label}</MuiFormLabel>}
			<FormGroup row={row}>
				{options.map((option) => (
					<FormControlLabel
						key={option[config.value]}
						control={
							<Checkbox
								checked={value?.some((checked: string) => checked === option[config.value])}
								{...inputProps}
								inputRef={ref}
								onChange={() => handleChange(option[config.value])}
								disabled={disabled}
							/>
						}
						label={<p className="body2">{option[config.label]}</p>}
					/>
				))}
			</FormGroup>
			{errors[name] && <FormHelperText sx={formHelperTextStyle}>{errors[name]?.message as string}</FormHelperText>}
		</FormControl>
	);
};

export default ReactHookFormCheckboxGroup;
