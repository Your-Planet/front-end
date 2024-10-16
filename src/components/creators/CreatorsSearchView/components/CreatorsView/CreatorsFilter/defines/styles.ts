import { SwapHorizRounded } from "@mui/icons-material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { Box, FormHelperText, styled, TextField } from "@mui/material";
import { grey } from "@mui/material/colors";

export const StyledBoxInBudgetFilter = styled(Box)`
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: ${grey[200]};
	border: 1px solid ${grey[500]};
	border-radius: 0.5rem;
	padding-y: 0.2rem;
`;

export const StyledTextFieldInBudgetFilter = styled(TextField)`
	input[type="number"]::-webkit-inner-spin-button,
	input[type="number"]::-webkit-outer-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
`;

export const StyledInfoOutlinedIcon = styled(InfoOutlinedIcon)`
	font-size: 1rem;
	vertical-align: middle;
	margin: 0 3px 0 3px;
`;

export const StyledFormHelperText = styled(FormHelperText)`
	margin: 0;
	user-select: none;
`;

export const StyledSwapHorizRounded = styled(SwapHorizRounded)`
	font-size: 1.1rem;
	vertical-align: middle;
	margin-left: 3px;
	color: ${grey[600]};
`;
