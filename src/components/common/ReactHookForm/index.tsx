import ReactHookFormCheckbox, {
	ReactHookFormCheckboxProps,
} from "@/components/common/ReactHookForm/components/Checkbox";
import ReactHookFormDatePicker, {
	ReactHookFormDatePickerProps,
} from "@/components/common/ReactHookForm/components/DatePicker";
import ReactHookFormRadioGroup, {
	ReactHookFormRadioGroupProps,
} from "@/components/common/ReactHookForm/components/RadioGroup";
import ReactHookFormSelect, { ReactHookFormSelectProps } from "@/components/common/ReactHookForm/components/Select";
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
	Select: <MenuItemValue extends string | number>(
		props: ReactHookFormSelectProps<TFieldValues, MenuItemValue>,
	) => ReactElement<ReactHookFormSelectProps<TFieldValues, MenuItemValue>>;
} => {
	return {
		TextField: ReactHookFormTextField<TFieldValues>,
		RadioGroup: <RadioValue extends string | number>(props: ReactHookFormRadioGroupProps<TFieldValues, RadioValue>) =>
			ReactHookFormRadioGroup<TFieldValues, RadioValue>(props),
		DatePicker: ReactHookFormDatePicker<TFieldValues>,
		Checkbox: <CheckboxValue extends string | number>(props: ReactHookFormCheckboxProps<TFieldValues, CheckboxValue>) =>
			ReactHookFormCheckbox<TFieldValues, CheckboxValue>(props),
		Select: <MenuItemValue extends string | number>(props: ReactHookFormSelectProps<TFieldValues, MenuItemValue>) =>
			ReactHookFormSelect<TFieldValues, MenuItemValue>(props),
	};
};

export default ReactHookForm;
