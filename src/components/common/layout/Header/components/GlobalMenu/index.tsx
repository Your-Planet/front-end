import GlobalMenuLink from "@/components/common/layout/Header/components/GlobalMenu/components/GlobalMenuLink";
import { IA } from "@/defines/ia/constants";
import { useAuthContext } from "@/providers/AuthProvider";
import { Box } from "@mui/material";

function GlobalMenu() {
	const { jwtPayload } = useAuthContext();

	return (
		<Box>
			{jwtPayload ? (
				<>
					<GlobalMenuLink page={IA.logout} />
					<GlobalMenuLink page={IA.mypage} />
				</>
			) : (
				<>
					<GlobalMenuLink page={IA.login} />
					<GlobalMenuLink page={IA.join} />
				</>
			)}
		</Box>
	);
}

export default GlobalMenu;
