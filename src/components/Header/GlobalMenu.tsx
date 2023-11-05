import { StyledHeaderLink } from "@/components/Header/defines/index";
import { Box } from "@mui/material";

const GlobalMenu = () => {
	return (
		<Box>
			<StyledHeaderLink href="/login" underline="none">
				Login
			</StyledHeaderLink>
			<StyledHeaderLink href="/" underline="none">
				Logout
			</StyledHeaderLink>
			<StyledHeaderLink href="/register" underline="none">
				Register
			</StyledHeaderLink>
			<StyledHeaderLink href="/my-page" underline="none">
				My Page
			</StyledHeaderLink>
		</Box>
	);
};

export default GlobalMenu;
