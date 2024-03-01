import { SnackbarOrigin } from "@mui/material";

export type TosLabel = "ALL" | "REQUIRED" | "PERSONAL_INFORMATION" | "SHOPPING_INFORMATION_RECEIPT";

export interface TosCheckedStateType {
	ALL: boolean;
	REQUIRED: boolean;
	PERSONAL_INFORMATION: boolean;
	SHOPPING_INFORMATION_RECEIPT: boolean;
}

export interface SnackbarStateType extends SnackbarOrigin {
	snackbarOpen: boolean;
}
