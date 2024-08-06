import { Box } from "@mui/material";
import { SxProps } from "@mui/system";
import { ReactNode } from "react";

export interface EllipsisBoxProps {
	sx?: Omit<
		SxProps,
		"overflow" | "overflowX" | "overflowY" | "textOverflow" | "display" | "WebkitLineClamp" | "WebkitBoxOrient"
	>;
	line: number;
	children: ReactNode | ReactNode[];
}

function EllipsisBox(props: EllipsisBoxProps) {
	const { sx, children, line } = props;

	return (
		<Box
			sx={{
				...sx,
				overflow: "hidden",
				textOverflow: "ellipsis",
				display: "-webkit-box",
				WebkitBoxOrient: "vertical",
				WebkitLineClamp: line.toString(),
			}}
		>
			{children}
		</Box>
	);
}

export default EllipsisBox;
