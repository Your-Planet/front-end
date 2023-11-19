import { ReactHookFormProps } from "@/components/common/ReactHookForm/defines/types";
import { FieldValues, useController, useFormContext } from "react-hook-form";
import { getRequiredErrorMessage } from "@/utils/react-hook-form/rule";
import { ChangeEventHandler } from "react";
import { getObjectAtPath } from "@/utils/object";

export type UseReactHookFormControlParams<
	TFieldValues extends FieldValues,
	ReactHookFormComponentProps extends ReactHookFormProps<TFieldValues>,
> = ReactHookFormComponentProps;

// export interface UseReactHookFormControl {}

function useReactHookFormControl<
	TFieldValues extends FieldValues,
	ReactHookFormComponentProps extends ReactHookFormProps<TFieldValues>,
>(params: UseReactHookFormControlParams<TFieldValues, ReactHookFormComponentProps>) {
	const { formName, rules, validator = () => true, label: originLabel, required, ...restProps } = params;

	const {
		formState: { errors },
	} = useFormContext<TFieldValues>();

	const {
		field: { onChange, ...field },
	} = useController({
		name: formName,
		rules: {
			...rules,
			required: required ? getRequiredErrorMessage() : false,
		},
	});

	const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
		if (!validator(e.target.value)) return;
		onChange(e);
	};

	const error = getObjectAtPath(errors, formName);
	const errorMessage = (error?.message as string) ?? " ";

	const label = `${originLabel}${required ? " *" : ""}`;

	return {
		restProps,
		field,
		label,
		error,
		errorMessage,
		handleChange,
	};
}

export default useReactHookFormControl;
