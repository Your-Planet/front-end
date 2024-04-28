import { ReactHookFormProps } from "@/components/common/ReactHookForm/defines/types";
import useReactHookFormControl from "@/components/common/ReactHookForm/hooks/useReactHookFormControl";
import { FormControl, FormHelperText, InputLabel, MenuItem, Select, SelectProps } from "@mui/material";
import { FieldValues } from "react-hook-form";

export interface ReactHookFormDropdownProps<TFieldValues extends FieldValues, MenuItemValue extends string | number>
	extends ReactHookFormProps<TFieldValues>,
		Omit<SelectProps, "label" | "required"> {
	items: {
		value: MenuItemValue;
		label?: string;
	}[];
}

function ReactHookFormDropdown<TFieldValues extends FieldValues, MenuItemValue extends string | number>(
	props: ReactHookFormDropdownProps<TFieldValues, MenuItemValue>,
) {
	const { items } = props;
	const { restProps, field, label, error, errorMessage } = useReactHookFormControl(props);

	return (
		<FormControl error={Boolean(error)}>
			{label && <InputLabel>{label}</InputLabel>}
			<Select {...restProps} {...field} label={label}>
				{items.map(({ label, value }) => (
					<MenuItem key={value} value={value}>
						{label}
					</MenuItem>
				))}
			</Select>
			{errorMessage && <FormHelperText>{errorMessage}</FormHelperText>}
		</FormControl>
	);
}

export default ReactHookFormDropdown;
