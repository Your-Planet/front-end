"use client";

import ReactHookForm from "@/components/common/ReactHookForm";
import { ProjectCommonForm, ProjectFormFieldCommonProps } from "@/defines/forms/project/types";
import { useAuthContext } from "@/providers/AuthProvider/components/AuthClientProvider";
import { useEffect } from "react";
import { useFormContext } from "react-hook-form";

export interface ProjectBrandNameProps extends ProjectFormFieldCommonProps {}

function ProjectSponsorName(props: ProjectBrandNameProps) {
	const { formName } = props;
	const { jwtPayload } = useAuthContext();
	const { TextField } = ReactHookForm<ProjectCommonForm>();

	const { setValue, getValues } = useFormContext<ProjectCommonForm>();

	useEffect(() => {
		if (jwtPayload) {
			setValue(formName, jwtPayload.name);
		}
	}, [jwtPayload]);

	return <TextField formName={formName} label="광고주명" InputProps={{ readOnly: true }} />;
}

export default ProjectSponsorName;
