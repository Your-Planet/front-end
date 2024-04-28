"use client";

import CentralBox from "@/components/common/CentralBox";
import { StyledBoxInFindPasswordComplete } from "@/components/find/components/FindPasswordCompleteView/defines/styles";
import { IA } from "@/defines/ia/constants";
import { getIaPath } from "@/utils/ia";

import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

type Props = {};

const sx = {
	fontWeight: "bold",
};

function FindPasswordCompleteView({}: Props) {
	const router = useRouter();

	const handleClick = () => {
		router.push(getIaPath(IA.login));
	};

	return (
		<CentralBox>
			<StyledBoxInFindPasswordComplete>
				<Box>
					<Typography variant="h4" sx={{ ...sx }}>
						새로운 비밀번호
					</Typography>
					<Typography variant="h4" sx={{ ...sx }}>
						설정이 완료되었어요.
					</Typography>
				</Box>

				<Button fullWidth variant="contained" size="large" onClick={handleClick}>
					로그인 하러가기
				</Button>
			</StyledBoxInFindPasswordComplete>
		</CentralBox>
	);
}

export default FindPasswordCompleteView;
