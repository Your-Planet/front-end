"use client";

import GnbLink from "@/components/common/layout/Header/components/Gnb/components/GnbLink";
import { IA } from "@/defines/ia/constants";
import { useAuthContext } from "@/providers/AuthProvider";
import { Box } from "@mui/material";

function Gnb() {
	const { jwtPayload } = useAuthContext();

	return (
		<Box className="flex">
			<GnbLink page={IA} />
			{jwtPayload?.memberType !== "AUTHOR" && <GnbLink page={IA.search} />}
		</Box>
	);
}

export default Gnb;
