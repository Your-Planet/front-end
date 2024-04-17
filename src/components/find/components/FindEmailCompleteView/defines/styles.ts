import { Box, Input, InputBaseComponentProps, styled } from "@mui/material";

export const StyledEmailBox = styled(Box)`
	border-radius: 0.5rem;
	background-color: rgba(0, 0, 0, 0.1);
	display: flex;
	justify-content: center;
`;

export const StyledEmailInput = styled(Input)`
	font-weight: 700;
	border-radius: 0.5rem;
	height: 50px;
`;

export const EmailInputProps = {
	style: {
		textAlign: "center",
	},
} as InputBaseComponentProps;
