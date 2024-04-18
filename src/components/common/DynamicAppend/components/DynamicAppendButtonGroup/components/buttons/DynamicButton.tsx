"use client";

import { DynamicButtonCommonProps } from "@/components/common/DynamicAppend/components/DynamicAppendButtonGroup/components/buttons/defines/types";
import { Avatar, Box } from "@mui/material";
import { SxProps } from "@mui/system";
import { StandardCSSProperties } from "@mui/system/styleFunctionSx/StandardCssProperties";
import { MouseEventHandler, ReactNode } from "react";

interface DynamicButtonProps extends DynamicButtonCommonProps {
	backgroundColor: StandardCSSProperties["backgroundColor"];
	children: ReactNode;
}

const BUTTON_SIZE = 28;

function DynamicButton(props: DynamicButtonProps) {
	const { display, disabled, onClick, children, backgroundColor } = props;

	const handleClick: MouseEventHandler = (e) => {
		if (disabled) return;
		onClick(e);
	};

	const disabledSx: SxProps = {};

	const notDisabledSx: SxProps = {
		cursor: "pointer",
		bgcolor: backgroundColor,
		"&:hover": {
			filter: "brightness(90%)",
		},
	};

	const additionalSx = disabled ? disabledSx : notDisabledSx;

	return (
		<>
			{display ? (
				<Avatar
					onClick={handleClick}
					sx={{
						width: BUTTON_SIZE,
						height: BUTTON_SIZE,
						transition: "filter 0.2s",
						...additionalSx,
					}}
				>
					{children}
				</Avatar>
			) : (
				<Box
					sx={{
						width: BUTTON_SIZE,
						height: BUTTON_SIZE,
					}}
				/>
			)}
		</>
	);
}

export default DynamicButton;
