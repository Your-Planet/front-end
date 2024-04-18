import { MouseEventHandler } from "react";

export interface DynamicButtonCommonProps {
	display: boolean;
	disabled: boolean;
	onClick: MouseEventHandler;
}
