import { Box, Typography } from "@mui/material";
import { ReactNode } from "react";
import { ChatDirection } from "./defines/types";

type Props = {
	children: ReactNode;
	emoticon: string;
	className?: string;
	direction?: ChatDirection;
};

function MessageBox(props: Props) {
	const { children, emoticon, className, direction = "chat-start" } = props;

	return (
		<Box className={`chat items-center ${direction} ${className}`}>
			{direction === "chat-start" && (
				<Box className="avatar mr-5">
					<Typography variant="h2">{emoticon}</Typography>
				</Box>
			)}
			<Box className={`chat-bubble max-w-full bg-white text-black`}>{children}</Box>
			{direction === "chat-end" && (
				<Box className="avatar ml-5">
					<Typography variant="h2">{emoticon}</Typography>
				</Box>
			)}
		</Box>
	);
}

export default MessageBox;
