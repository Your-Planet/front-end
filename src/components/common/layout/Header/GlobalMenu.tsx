import { StyledHeaderLink } from "./defines";
import { Box } from "@mui/material";

const GlobalMenu = () => {
	return (
		<Box>
			<StyledHeaderLink href="/login">
				Login
			</StyledHeaderLink>
			<StyledHeaderLink href="/">
				Logout
			</StyledHeaderLink>
			<StyledHeaderLink href="/register">
				Register
			</StyledHeaderLink>
			<StyledHeaderLink href="/my-page">
				My Page
			</StyledHeaderLink>
		</Box>
	);
};

export default GlobalMenu;
