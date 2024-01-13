import { Box } from "@mui/material";
import { StyledHeaderLink } from "./defines/constants";

function GlobalMenu() {
	return (
		<Box>
			<StyledHeaderLink href="/login">Login</StyledHeaderLink>
			<StyledHeaderLink href="/">Logout</StyledHeaderLink>
			<StyledHeaderLink href="/register">Register</StyledHeaderLink>
			<StyledHeaderLink href="/my-page">My Page</StyledHeaderLink>
		</Box>
	);
}

export default GlobalMenu;
