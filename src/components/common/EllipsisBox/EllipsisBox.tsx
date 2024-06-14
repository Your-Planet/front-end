import { Box } from "@mui/material";
import { SxProps } from "@mui/system";
import { ReactNode } from "react";

export interface EllipsisBoxProps {
	sx?: Omit<
		SxProps,
		"overflow" | "overflowX" | "overflowY" | "textOverflow" | "display" | "-webkit-line-clamp" | "-webkit-box-orient"
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
				"-webkit-box-orient": "vertical",
				"-webkit-line-clamp": line.toString(),
			}}
		>
			{children}
		</Box>
	);
}

export default EllipsisBox;
