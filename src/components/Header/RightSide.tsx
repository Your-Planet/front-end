import { StyledHeaderLink } from "@/defines/header/index";
import { Box } from "@mui/material";

type Props = {};

const RightSide = (props: Props) => {
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

export default RightSide;
