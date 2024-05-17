"use client";

import { StyledMain } from "@/components/common/layout/Main/defines/styles";
import { Box } from "@mui/material";
import { ReactNode } from "react";

export interface MainProps {
	children: ReactNode;
}

function Main(props: MainProps) {
	const { children } = props;

	return (
		<StyledMain>
			<Box
				sx={{
					flex: "auto",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				{children}
			</Box>
		</StyledMain>
	);
}

export default Main;
