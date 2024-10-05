import { ReactHookFormProps } from "@/components/common/ReactHookForm/defines/types";
import { ProjectCommonForm } from "@/defines/forms/project/types/project.types.form";
import { FieldPath } from "react-hook-form";

export type DemandType = "DEMANDED" | "NOT_DEMANDED";

export interface ProjectFormFieldCommonProps<
	THookFormName extends FieldPath<ProjectCommonForm> = FieldPath<ProjectCommonForm>,
> extends Pick<ReactHookFormProps<ProjectCommonForm>, "required"> {
	formName: THookFormName;
	helperText?: string;
	readOnly?: boolean;
}
