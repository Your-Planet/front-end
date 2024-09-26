"use client";

import ReactHookForm from "@/components/common/ReactHookForm";
import { ProjectCommonForm, ProjectFormFieldCommonProps } from "@/defines/forms/project/types";
import { useAuthContext } from "@/providers/AuthProvider/components/AuthClientProvider";
import { useEffect, useState } from "react";

export interface ProjectBrandNameProps extends ProjectFormFieldCommonProps {}

function ProjectSponsorName(props: ProjectBrandNameProps) {
	const { formName } = props;
	const { jwtPayload } = useAuthContext();
	const { TextField } = ReactHookForm<ProjectCommonForm>();
	const [sponsorName, setSponsorName] = useState<string>("");

	useEffect(() => {
		if (jwtPayload) {
			setSponsorName(jwtPayload.name);
		}
	}, [jwtPayload]);

	return <TextField formName={formName} label="광고주명" value={sponsorName} InputProps={{ readOnly: true }} />;
}

export default ProjectSponsorName;
