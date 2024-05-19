import { Box, styled } from "@mui/material";

export const StyledBlurBox = styled(Box)`
	width: 100%;
	height: 100%;
	position: absolute;
	background-color: rgb(255 255 255 / 0.5);
	top: 0;
	left: 0;
	z-index: 9999;
	backdrop-filter: blur(12px);
`;

export const StyledBlurContainerBox = styled(Box)`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background-color: white;
	padding: 2rem;
	border-radius: 0.375rem;
	box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const StyledBlurInnerBox = styled(Box)`
	display: flex;
	flex-direction: column;
	gap: 2rem;
`;
