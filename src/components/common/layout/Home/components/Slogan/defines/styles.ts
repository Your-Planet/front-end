import { Box, styled } from "@mui/material";
import Image from "next/image";

export const StyledFlexBoxInSlogan = styled(Box)`
	display: flex;
`;

export const StyledContainerInSlogan = styled(StyledFlexBoxInSlogan)`
	width: 100%;
	height: calc(100vh - 80px);
	position: relative;
	text-align: center;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	user-select: none;
`;

export const StyledImageInSlogan = styled(Image)`
	@keyframes jump-in {
		0% {
			transform: scale(0%);
		}
		80% {
			transform: scale(120%);
		}
		100% {
			transform: scale(100%);
		}
	}

	animation: jump-in 0.5s both;
	animation-duration: 1000ms;
	animation-delay: 3000ms;
`;

export const StyledTextBoxInSlogan = styled(StyledFlexBoxInSlogan)`
	align-items: center;
	margin-top: 0.75rem;
`;
