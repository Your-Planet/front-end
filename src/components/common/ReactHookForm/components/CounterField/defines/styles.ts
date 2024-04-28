import { Box, InputBaseComponentProps, styled } from "@mui/material";

export const sxInputLabelInCounterField = {
	transform: "translate(14px, 0) scale(0.75)",
};

export const StyledBoxInCounterField = styled(Box)`
	display: flex;
	flex-direction: column;
`;

export const inputPropsInCounterField = {
	style: {
		textAlign: "center",
	},
} as InputBaseComponentProps;
