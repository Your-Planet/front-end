import { FieldPath, FieldValues, RegisterOptions as JoinOptions } from "react-hook-form";

export interface ReactHookFormProps<TFieldValues extends FieldValues = FieldValues> {
	formName: FieldPath<TFieldValues>;
	rules?: Exclude<JoinOptions, "valueAsNumber" | "valueAsDate" | "setValueAs">;
	validator?: (value: string) => boolean;
	label?: string;
	required?: boolean;
	hideErrorMessage?: boolean;
}
