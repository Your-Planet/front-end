"use client";

import DynamicButton from "@/components/common/DynamicAppend/components/DynamicAppendButtonGroup/components/buttons/DynamicButton";
import { DynamicButtonCommonProps } from "@/components/common/DynamicAppend/components/DynamicAppendButtonGroup/components/buttons/defines/types";
import RemoveIcon from "@mui/icons-material/Remove";
import { red } from "@mui/material/colors";

export interface DynamicRemoveButtonProps extends DynamicButtonCommonProps {}

function DynamicRemoveButton(props: DynamicRemoveButtonProps) {
	return (
		<DynamicButton {...props} backgroundColor={red[500]}>
			<RemoveIcon />
		</DynamicButton>
	);
}

export default DynamicRemoveButton;
