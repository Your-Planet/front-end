import { COOKIE } from "@/defines/cookie/constants";
import { useAuthContext } from "@/providers/AuthProvider";
import { removeCookie } from "@/utils/cookie";
import { Box, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import { LABEL_BY_GLOBAL_MENU } from "./defines/constants";
import {
	StyledDropdownMenuItemError,
	StyledDropdownMenuItemNormal,
	StyledHeaderButton,
	StyledHeaderLink,
} from "./defines/styles";

function GlobalMenu() {
	const { jwtPayload } = useAuthContext();
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const openMyPage = Boolean(anchorEl);

	const handleClickLogout = () => {
		removeCookie(COOKIE.accessToken);
	};

	const handleClickMyPage = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event?.currentTarget);
	};

	const handleCloseMyPage = () => {
		setAnchorEl(null);
	};

	return (
		<Box>
			{jwtPayload ? (
				<>
					<StyledHeaderLink href="/logout" onClick={handleClickLogout}>
						{LABEL_BY_GLOBAL_MENU.LOG_OUT}
					</StyledHeaderLink>
					<StyledHeaderButton disableRipple onClick={handleClickMyPage}>
						{LABEL_BY_GLOBAL_MENU.MY_PAGE}
					</StyledHeaderButton>
					<Menu anchorEl={anchorEl} open={openMyPage} onClose={handleCloseMyPage}>
						<MenuItem onClick={handleCloseMyPage}>
							<StyledDropdownMenuItemNormal href="/edit-profile">
								{LABEL_BY_GLOBAL_MENU.EDIT_PROFILE}
							</StyledDropdownMenuItemNormal>
						</MenuItem>
						{jwtPayload.memberType === "AUTHOR" && (
							<MenuItem onClick={handleCloseMyPage}>
								<StyledDropdownMenuItemNormal href="/post-me">
									{LABEL_BY_GLOBAL_MENU.EDIT_PORTFOLIO}
								</StyledDropdownMenuItemNormal>
							</MenuItem>
						)}
						<MenuItem onClick={handleCloseMyPage}>
							<StyledDropdownMenuItemNormal href="qna">{LABEL_BY_GLOBAL_MENU.QNA}</StyledDropdownMenuItemNormal>
						</MenuItem>
						<MenuItem onClick={handleCloseMyPage}>
							<StyledDropdownMenuItemError href="delete-account">
								{LABEL_BY_GLOBAL_MENU.DELETE_ACCOUNT}
							</StyledDropdownMenuItemError>
						</MenuItem>
					</Menu>
				</>
			) : (
				<>
					<StyledHeaderLink href="/login">{LABEL_BY_GLOBAL_MENU.LOG_IN}</StyledHeaderLink>
					<StyledHeaderLink href="/register">{LABEL_BY_GLOBAL_MENU.REGISTER}</StyledHeaderLink>
				</>
			)}
		</Box>
	);
}

export default GlobalMenu;
