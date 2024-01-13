import { SnackbarOrigin } from "@mui/material";

export type tosLabel = "ALL" | "REQUIRED" | "PERSONAL_INFORMATION" | "SHOPPING_INFORMATION_RECEIPT";

export interface tosCheckedStateType {
	ALL: boolean;
	REQUIRED: boolean;
	PERSONAL_INFORMATION: boolean;
	SHOPPING_INFORMATION_RECEIPT: boolean;
}

export interface snackbarStateType extends SnackbarOrigin {
	snackbarOpen: boolean;
}
