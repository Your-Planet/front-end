import ReactHookFormCheckbox, {
	ReactHookFormCheckboxProps,
} from "@/components/common/ReactHookForm/components/Checkbox";
import ReactHookFormCounterField, {
	ReactHookFormCounterFieldProps,
} from "@/components/common/ReactHookForm/components/CounterField";
import ReactHookFormDatePicker, {
	ReactHookFormDatePickerProps,
} from "@/components/common/ReactHookForm/components/DatePicker";
import ReactHookFormDropdown, {
	ReactHookFormDropdownProps,
} from "@/components/common/ReactHookForm/components/Dropdown";
import ReactHookFormRadioGroup, {
	ReactHookFormRadioGroupProps,
} from "@/components/common/ReactHookForm/components/RadioGroup";
import ReactHookFormTextField, {
	ReactHookFormTextFieldProps,
} from "@/components/common/ReactHookForm/components/TextField";
import { JSXElementConstructor, ReactElement } from "react";
import { FieldValues } from "react-hook-form";

const ReactHookForm = <TFieldValues extends FieldValues = FieldValues>(): {
	TextField: JSXElementConstructor<ReactHookFormTextFieldProps<TFieldValues>>;
	RadioGroup: <RadioValue extends string | number>(
		props: ReactHookFormRadioGroupProps<TFieldValues, RadioValue>,
	) => ReactElement<ReactHookFormRadioGroupProps<TFieldValues, RadioValue>>;
	DatePicker: JSXElementConstructor<ReactHookFormDatePickerProps<TFieldValues>>;
	Checkbox: <CheckboxValue extends string | number>(
		props: ReactHookFormCheckboxProps<TFieldValues, CheckboxValue>,
	) => ReactElement<ReactHookFormCheckboxProps<TFieldValues, CheckboxValue>>;
	CounterField: JSXElementConstructor<ReactHookFormCounterFieldProps<TFieldValues>>;
	DropdownMenu: <MenuItemValue extends string | number>(
		props: ReactHookFormDropdownProps<TFieldValues, MenuItemValue>,
	) => ReactElement<ReactHookFormDropdownProps<TFieldValues, MenuItemValue>>;
} => {
	return {
		TextField: ReactHookFormTextField<TFieldValues>,
		RadioGroup: <RadioValue extends string | number>(props: ReactHookFormRadioGroupProps<TFieldValues, RadioValue>) =>
			ReactHookFormRadioGroup<TFieldValues, RadioValue>(props),
		DatePicker: ReactHookFormDatePicker<TFieldValues>,
		Checkbox: <CheckboxValue extends string | number>(props: ReactHookFormCheckboxProps<TFieldValues, CheckboxValue>) =>
			ReactHookFormCheckbox<TFieldValues, CheckboxValue>(props),
		CounterField: ReactHookFormCounterField<TFieldValues>,
		DropdownMenu: <MenuItemValue extends string | number>(
			props: ReactHookFormDropdownProps<TFieldValues, MenuItemValue>,
		) => ReactHookFormDropdown<TFieldValues, MenuItemValue>(props),
	};
};

export default ReactHookForm;
