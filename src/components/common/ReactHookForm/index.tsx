import { FieldValues } from "react-hook-form";
import { JSXElementConstructor } from "react";
import ReactHookFormTextField, {
	ReactHookFormTextFieldProps,
} from "@/components/common/ReactHookForm/components/TextField";

const ReactHookForm = <TFieldValues extends FieldValues = FieldValues>(): {
	TextField: JSXElementConstructor<ReactHookFormTextFieldProps<TFieldValues>>;
} => {
	return {
		TextField: ReactHookFormTextField<TFieldValues>,
	};
};

export default ReactHookForm;
