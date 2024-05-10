import CloseIcon from "@mui/icons-material/Close";
import {
	closeSnackbar,
	enqueueSnackbar,
	OptionsWithExtraProps,
	SnackbarKey,
	SnackbarMessage,
	VariantType,
} from "notistack";

export const enqueueClosableSnackbar = <V extends VariantType>(
	options: OptionsWithExtraProps<V> & { message?: SnackbarMessage },
): SnackbarKey => {
	const snackbarKey = enqueueSnackbar({
		// @ts-ignore
		...options,
		action: <CloseIcon sx={{ cursor: "pointer" }} onClick={() => closeSnackbar(snackbarKey)} />,
	});

	return snackbarKey;
};
