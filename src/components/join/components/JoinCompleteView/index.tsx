"use client";

import { StyledBoldTypography } from "@/components/common/text/defines/styles";
import { StyledBox } from "@/components/join/components/JoinCompleteView/defines/styles";
import { IA } from "@/defines/ia/constants";
import { getIaPath } from "@/utils/ia";
import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

type Props = {};

function CompleteView({}: Props) {
	const router = useRouter();

	const handleClick = () => {
		router.push(getIaPath(IA.login));
	};

	return (
		<StyledBox>
			<Box>
				<StyledBoldTypography variant="h4">
					회원가입이
					<br />
					완료되었습니다!
				</StyledBoldTypography>
			</Box>
			<Box>
				<Typography color="GrayText" variant="body2">
					환영합니다.
					<br />
					유어플래닛에서 온전히 나의 색에 집중해 보세요.
				</Typography>
			</Box>
			<Button variant="contained" onClick={handleClick} size="large" fullWidth>
				로그인 하러가기
			</Button>
		</StyledBox>
	);
}

export default CompleteView;
