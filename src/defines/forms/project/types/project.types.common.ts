import { ReactHookFormProps } from "@/components/common/ReactHookForm/defines/types";
import { ProjectCommonForm } from "@/defines/forms/project/types/project.types.form";

export type DemandType = "DEMANDED" | "NOT_DEMANDED";

export interface ProjectFormFieldCommonProps
	extends Pick<ReactHookFormProps<ProjectCommonForm>, "formName" | "required"> {
	helperText?: string;
}
