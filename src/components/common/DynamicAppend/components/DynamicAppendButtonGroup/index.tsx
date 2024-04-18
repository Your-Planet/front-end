"use client";

import DynamicAppendButton from "@/components/common/DynamicAppend/components/DynamicAppendButtonGroup/components/buttons/DynamicAppendButton";
import DynamicRemoveButton from "@/components/common/DynamicAppend/components/DynamicAppendButtonGroup/components/buttons/DynamicRemoveButton";
import { Grid } from "@mui/material";
import { MouseEventHandler } from "react";

export interface DynamicAppendButtonGroupProps {
	disabled: boolean;
	appendable: boolean;
	removable: boolean;
	onClickAppend: MouseEventHandler<HTMLButtonElement>;
	onClickRemove: MouseEventHandler<HTMLButtonElement>;
}

function DynamicAppendButtonGroup(props: DynamicAppendButtonGroupProps) {
	const { disabled, appendable, removable, onClickAppend, onClickRemove } = props;

	return (
		<Grid container spacing={1} margin={0} gap={"4px"}>
			<Grid>
				<DynamicRemoveButton display={removable} disabled={disabled} onClick={onClickRemove} />
			</Grid>
			<Grid>
				<DynamicAppendButton display={appendable} disabled={disabled} onClick={onClickAppend} />
			</Grid>
		</Grid>
	);
}

export default DynamicAppendButtonGroup;
