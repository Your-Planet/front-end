"use client";

import { Box, Container, Typography } from "@mui/material";
import { ReactNode } from "react";

export interface StatusViewProps {
	title: string;
	description?: string;
	children?: ReactNode;
}

function StatusView(props: StatusViewProps) {
	const { title, description, children } = props;

	return (
		<Box>
			<Container
				sx={{
					textAlign: "center",
					display: "flex",
					flexDirection: "column",
					gap: "32px",
				}}
			>
				<Typography variant="h3">{title}</Typography>
				<Typography variant="subtitle1">{description}</Typography>
			</Container>

			<Container>{children}</Container>
		</Box>
	);
}

export default StatusView;
