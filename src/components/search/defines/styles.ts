import { Box, styled } from "@mui/material";

export const StyledBannerBox = styled(Box)`
	width: 100%;
	height: calc(100vh - 72px);
	position: relative;
	display: flex;
	align-items: center;
	padding-left: 150px;
	padding-right: 150px;
	box-sizing: border-box;
	background-color: rgb(248 248 254);
`;

export const StyledContainerBox = styled(Box)`
	display: flex;
	width: 100%;
	justify-content: center;
	align-items: center;
	position: relative;
`;

export const StyledInnerBox = styled(Box)`
	min-width: 50%;
	max-width: min-content;
`;

export const StyledBlurBox = styled(Box)`
	width: 100%;
	height: 100%;
	position: absolute;
	background-color: rgb(255 255 255 / 0.5);
	top: 0;
	left: 0;
	z-index: 9999;
	backdrop-filter: blur(12px);
	display: flex;
	justify-content: center;
	align-items: center;
`;
