import { MouseEventHandler } from "react";

export interface CreatorCardFieldProps<T> {
	value: T;
}

export type CreatorCardButtonEvent = {
	onClick?: MouseEventHandler<HTMLButtonElement>;
	tooltip?: string;
};
