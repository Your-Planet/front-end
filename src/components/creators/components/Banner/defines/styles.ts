import { Box, styled } from "@mui/material";

export const StyledBoxInBanner = styled(Box)`
	display: flex;
	width: 100%;
	height: 100%;
	justify-content: center;
	flex-direction: column;
`;

export const StyledAnimatedBoxInBanner = styled(Box)`
	display: flex;

	@keyframes fade-right {
		0% {
			opacity: 0;
			transform: translateX(-2rem);
		}
		100% {
			opacity: 1;
			transform: translateX(0);
		}
	}
	animation: fade-right 1s both;
	animation-duration: 3s;
`;

export const StyledTypographyBoxInBanner = styled(Box)`
	border-top-width: 10px;
	border-style: solid;
	border-top-color: rgb(0 0 0 / black);
`;

export const StyledTypographyAnimatedBoxInBanner = styled(Box)`
	@keyframes fade-right {
		0% {
			opacity: 0;
			transform: translateX(-2rem /* -32px */);
		}
		100% {
			opacity: 1;
			transform: translateX(0);
		}
	}
	animation: fade-right 1s both;
	animation-duration: 3s;
	animation-delay: 1000ms;
`;
