import { Box, Typography } from "@mui/material";
import { ReactNode } from "react";

type Props = {
	children: ReactNode;
	emoticon: string;
	className?: string;
	direction?: string;
};

function MessageBox(props: Props) {
	const { children, emoticon, className, direction = "justify-start" } = props;

	return (
		<Box className={`flex ${direction}`}>
			<Box className={`flex items-center bg-white rounded-xl w-fit h-fit px-5 py-8 ${className}`}>
				<Typography className="mr-5" variant="h2">
					{emoticon}
				</Typography>
				{children}
			</Box>
		</Box>
	);
}

export default MessageBox;
