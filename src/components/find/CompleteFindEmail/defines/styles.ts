import { BACK_BUTTON_BACKGROUND_COLOR } from "@/defines/common/styles";
import { Box, Button, Input, InputBaseComponentProps, styled } from "@mui/material";

export const StyledEmailBox = styled(Box)`
	border-radius: 0.5rem;
	background-color: rgba(0, 0, 0, 0.1);
	display: flex;
	justify-content: center;
`;

export const StyledInput = styled(Input)`
	font-weight: 700;
	border-radius: 0.5rem;
	height: 50px;
`;

export const inputProps = {
	style: {
		textAlign: "center",
	},
} as InputBaseComponentProps;

export const StyledButton = styled(Button)`
	font-weight: 700;
`;

export const StyledBackButton = styled(StyledButton)`
	background-color: ${BACK_BUTTON_BACKGROUND_COLOR} !important;
`;
