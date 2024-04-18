"use client";

import DynamicButton from "@/components/common/DynamicAppend/components/DynamicAppendButtonGroup/components/buttons/DynamicButton";
import { DynamicButtonCommonProps } from "@/components/common/DynamicAppend/components/DynamicAppendButtonGroup/components/buttons/defines/types";
import AddIcon from "@mui/icons-material/Add";
import { green } from "@mui/material/colors";

export interface DynamicAppendButtonProps extends DynamicButtonCommonProps {}

function DynamicAppendButton(props: DynamicAppendButtonProps) {
	return (
		<>
			<DynamicButton {...props} backgroundColor={green[500]}>
				<AddIcon />
			</DynamicButton>
		</>
	);
}

export default DynamicAppendButton;
