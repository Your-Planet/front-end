"use client";

import { useAuthContext } from "@/providers/AuthProvider/components/AuthClientProvider";
import { TextField } from "@mui/material";

function ProjectSponsorName() {
	const { jwtPayload } = useAuthContext();

	return <TextField label="광고주명" defaultValue={jwtPayload?.name} InputProps={{ readOnly: true }} />;
}

export default ProjectSponsorName;
