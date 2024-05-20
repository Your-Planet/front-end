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
	padding: 3rem;
`;

export const StyledInnerBox = styled(Box)`
	width: 100%;
	padding: 1.5rem;
`;
