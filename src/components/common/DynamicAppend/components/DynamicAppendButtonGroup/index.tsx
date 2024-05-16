"use client";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Button, ButtonGroup, FormHelperText } from "@mui/material";
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
		<>
			<ButtonGroup sx={{ flex: "auto" }}>
				<Button aria-label="remove" disabled={!removable || disabled} onClick={onClickRemove}>
					<RemoveIcon fontSize="small" />
				</Button>
				<Button aria-label="append" disabled={!appendable || disabled} onClick={onClickAppend}>
					<AddIcon fontSize="small" />
				</Button>
			</ButtonGroup>
			<FormHelperText sx={{ margin: "3px 14px 0" }}> </FormHelperText>
		</>
	);
}

export default DynamicAppendButtonGroup;
