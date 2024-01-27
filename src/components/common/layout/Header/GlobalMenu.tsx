import { COOKIE } from "@/defines/cookie/constants";
import { removeCookie } from "@/utils/cookie";
import { Box } from "@mui/material";
import { useRecoilState } from "recoil";
import { CookieType } from "../../../../defines/cookie/constants";
import { loggedInContext } from "../../../../recoil/atoms/Auth";
import { StyledHeaderLink } from "./defines/constants";

function GlobalMenu() {
	const [isLoggedIn, setIsLoggedIn] = useRecoilState<CookieType>(loggedInContext);

	const handleClickLogout = () => {
		removeCookie(COOKIE.accessToken);
		setIsLoggedIn(undefined);
	};

	return (
		<Box>
			{!isLoggedIn && <StyledHeaderLink href="/login">Login</StyledHeaderLink>}
			{isLoggedIn && (
				<StyledHeaderLink href="/" onClick={handleClickLogout}>
					Logout
				</StyledHeaderLink>
			)}
			<StyledHeaderLink href="/register">Register</StyledHeaderLink>
			<StyledHeaderLink href="/my-page">My Page</StyledHeaderLink>
		</Box>
	);
}

export default GlobalMenu;
