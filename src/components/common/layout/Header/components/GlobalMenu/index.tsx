import GlobalMenuLink from "@/components/common/layout/Header/components/GlobalMenu/components/GlobalMenuLink";
import { IA } from "@/defines/ia/constants";
import { useAuthContext } from "@/providers/AuthProvider";
import { Box } from "@mui/material";
import { usePathname, useSearchParams } from "next/navigation";

function GlobalMenu() {
	const { jwtPayload } = useAuthContext();

	const pathname = usePathname();
	const searchParams = useSearchParams();
	const currentPathWithQuery = `${pathname}?${searchParams.toString()}`;

	return (
		<Box>
			{jwtPayload ? (
				<>
					<GlobalMenuLink
						page={IA.logout}
						query={{
							redirect: currentPathWithQuery,
						}}
					/>
					{/* TODO: @나은찬 드롭다운 메뉴 수정 */}
					<GlobalMenuLink page={IA.userinfo} />
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
