import { Box } from "@mui/material";
import { SxProps } from "@mui/system/styleFunctionSx";
import { isEqualWith } from "lodash-es";
import { memo, ReactNode } from "react";

export interface PageContainerProps {
	sx?: SxProps;
	children: ReactNode | ReactNode[];
}

const DEFAULT_SX = {};

function PageContainer(props: PageContainerProps) {
	const { sx = DEFAULT_SX, children } = props;

	return (
		<Box
			sx={{
				flex: "auto",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				...sx,
			}}
		>
			{children}
		</Box>
	);
}

export default memo(PageContainer, (prevProps, nextProps) => {
	return prevProps.children === nextProps.children || isEqualWith(prevProps, nextProps);
});
