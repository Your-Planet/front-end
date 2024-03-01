"use client";

import GnbLink from "@/components/common/layout/Header/components/Gnb/components/GnbLink";
import { IA } from "@/defines/ia/constants";
import { Box } from "@mui/material";

function Gnb() {
	return (
		<Box className="flex">
			<GnbLink page={IA} />
			<GnbLink page={IA.search} />
		</Box>
	);
}

export default Gnb;
