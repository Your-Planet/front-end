import ReactHookFormCheckbox, {
	ReactHookFormCheckboxProps,
} from "@/components/common/ReactHookForm/components/Checkbox";
import ReactHookFormCheckboxGroup, {
	ReactHookFormCheckboxGroupProps,
} from "@/components/common/ReactHookForm/components/CheckboxGroup";
import ReactHookFormDatePicker, {
	ReactHookFormDatePickerProps,
} from "@/components/common/ReactHookForm/components/DatePicker";
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
	CheckboxGroup: <CheckboxValue extends string | number>(
		props: ReactHookFormCheckboxGroupProps<TFieldValues, CheckboxValue>,
	) => ReactElement<ReactHookFormCheckboxGroupProps<TFieldValues, CheckboxValue>>;
} => {
	return {
		TextField: ReactHookFormTextField<TFieldValues>,
		RadioGroup: <RadioValue extends string | number>(props: ReactHookFormRadioGroupProps<TFieldValues, RadioValue>) =>
			ReactHookFormRadioGroup<TFieldValues, RadioValue>(props),
		DatePicker: ReactHookFormDatePicker<TFieldValues>,
		Checkbox: <CheckboxValue extends string | number>(props: ReactHookFormCheckboxProps<TFieldValues, CheckboxValue>) =>
			ReactHookFormCheckbox<TFieldValues, CheckboxValue>(props),
		CheckboxGroup: <CheckboxValue extends string | number>(
			props: ReactHookFormCheckboxGroupProps<TFieldValues, CheckboxValue>,
		) => ReactHookFormCheckboxGroup<TFieldValues, CheckboxValue>(props),
	};
};

export default ReactHookForm;
