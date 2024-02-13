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
import React, { JSXElementConstructor, ReactElement } from "react";
import { FieldValues } from "react-hook-form";

const ReactHookForm = <TFieldValues extends FieldValues = FieldValues>(): {
	TextField: JSXElementConstructor<ReactHookFormTextFieldProps<TFieldValues>>;
	RadioGroup: <RadioValue extends string | number>(
		props: ReactHookFormRadioGroupProps<TFieldValues, RadioValue>,
	) => ReactElement<ReactHookFormRadioGroupProps<TFieldValues, RadioValue>>;
	DatePicker: JSXElementConstructor<ReactHookFormDatePickerProps<TFieldValues>>;
	CheckboxGroup: React.FC<ReactHookFormCheckboxGroupProps>;
} => {
	return {
		TextField: ReactHookFormTextField<TFieldValues>,
		RadioGroup: <RadioValue extends string | number>(props: ReactHookFormRadioGroupProps<TFieldValues, RadioValue>) =>
			ReactHookFormRadioGroup<TFieldValues, RadioValue>(props),
		DatePicker: ReactHookFormDatePicker<TFieldValues>,
		CheckboxGroup: ReactHookFormCheckboxGroup,
	};
};

export default ReactHookForm;
