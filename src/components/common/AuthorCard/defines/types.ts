import { MouseEventHandler } from "react";

export interface AuthorCardFieldProps<T> {
	value: T;
}

export type AuthorCardButtonEvent = {
	onClick?: MouseEventHandler<HTMLButtonElement>;
	tooltip?: string;
};
