import { COOKIE } from "@/defines/cookie/constants";
import { useAuthContext } from "@/providers/AuthProvider";
import { removeCookie } from "@/utils/cookie";
import { Box } from "@mui/material";
import { LABEL_BY_GLOBAL_MENU } from "./defines/constants";
import { StyledHeaderLink } from "./defines/styles";

function GlobalMenu() {
	const { jwtPayload } = useAuthContext();

	const handleClickLogout = () => {
		removeCookie(COOKIE.accessToken);
	};

	return (
		<Box>
			{jwtPayload ? (
				<>
					<StyledHeaderLink href="/logout" onClick={handleClickLogout}>
						{LABEL_BY_GLOBAL_MENU.LOG_OUT}
					</StyledHeaderLink>
					<StyledHeaderLink href="/my-page">{LABEL_BY_GLOBAL_MENU.MY_PAGE}</StyledHeaderLink>
				</>
			) : (
				<>
					<StyledHeaderLink href="/login">{LABEL_BY_GLOBAL_MENU.LOG_IN}</StyledHeaderLink>
					<StyledHeaderLink href="/join">{LABEL_BY_GLOBAL_MENU.JOIN}</StyledHeaderLink>
				</>
			)}
		</Box>
	);
}

export default GlobalMenu;
