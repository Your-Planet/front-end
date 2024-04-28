import {
	inputPropsInCounterField,
	StyledBoxInCounterField,
	sxInputLabelInCounterField,
} from "@/components/common/ReactHookForm/components/CounterField/defines/styles";
import { ReactHookFormProps } from "@/components/common/ReactHookForm/defines/types";
import useReactHookFormControl from "@/components/common/ReactHookForm/hooks/useReactHookFormControl";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Button, ButtonGroup, FormHelperText, InputLabel, TextField, TextFieldProps } from "@mui/material";
import { useState } from "react";
import { FieldValues } from "react-hook-form";

export interface ReactHookFormCounterFieldProps<TFieldValues extends FieldValues>
	extends ReactHookFormProps<TFieldValues>,
		Omit<TextFieldProps, "onChange" | "label" | "required"> {
	min: number;
	max: number;
}

function ReactHookFormCounterField<TFieldValues extends FieldValues = FieldValues>(
	props: ReactHookFormCounterFieldProps<TFieldValues>,
) {
	const { restProps, field, label, error, errorMessage, handleChange } = useReactHookFormControl(props);
	const { min, max } = restProps;
	const [value, setValue] = useState<number>(field.value);

	const handleClickDecreaseButton = () => {
		setValue(value - 1);
	};

	const handleClickIncreaseButton = () => {
		setValue(value + 1);
	};

	return (
		<StyledBoxInCounterField>
			<InputLabel sx={{ ...sxInputLabelInCounterField }}>{label}</InputLabel>
			<ButtonGroup>
				<Button onClick={handleClickDecreaseButton} disabled={value === min}>
					<RemoveIcon fontSize="small" />
				</Button>
				<TextField
					{...field}
					{...restProps}
					value={value}
					InputProps={{ readOnly: true }}
					inputProps={{ ...inputPropsInCounterField }}
				/>
				<Button onClick={handleClickIncreaseButton} disabled={value === max}>
					<AddIcon fontSize="small" />
				</Button>
			</ButtonGroup>
			{errorMessage && <FormHelperText>{errorMessage}</FormHelperText>}
		</StyledBoxInCounterField>
	);
}

export default ReactHookFormCounterField;
