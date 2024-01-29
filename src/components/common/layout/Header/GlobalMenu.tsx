import { Box } from "@mui/material";
import { LABEL_BY_GLOBAL_MENU } from "./defines/constants";
import { StyledHeaderLink } from "./defines/styles";

function GlobalMenu() {
	return (
		<Box>
			<StyledHeaderLink href="/login">{LABEL_BY_GLOBAL_MENU.LOG_IN}</StyledHeaderLink>
			<StyledHeaderLink href="/">{LABEL_BY_GLOBAL_MENU.LOG_OUT}</StyledHeaderLink>
			<StyledHeaderLink href="/register">{LABEL_BY_GLOBAL_MENU.REGISTER}</StyledHeaderLink>
			<StyledHeaderLink href="/my-page">{LABEL_BY_GLOBAL_MENU.MY_PAGE}</StyledHeaderLink>
		</Box>
	);
}

export default GlobalMenu;
