"use client";

import CentralBox from "@/components/common/CentralBox";
import H2 from "@/components/common/text/H2";
import { StyledBoxInFindPasswordComplete } from "@/components/find/components/FindPasswordCompleteView/defines/styles";
import { IA } from "@/defines/ia/constants";
import { getIaPath } from "@/utils/ia";

import { Box, Button } from "@mui/material";
import { useRouter } from "next/navigation";

type Props = {};

function FindPasswordCompleteView({}: Props) {
	const router = useRouter();

	const handleClick = () => {
		router.push(getIaPath(IA.login));
	};

	return (
		<CentralBox>
			<StyledBoxInFindPasswordComplete>
				<Box>
					<H2>새로운 비밀번호</H2>
					<H2>설정이 완료되었어요.</H2>
				</Box>

				<Button fullWidth variant="contained" size="large" onClick={handleClick}>
					로그인 하러가기
				</Button>
			</StyledBoxInFindPasswordComplete>
		</CentralBox>
	);
}

export default FindPasswordCompleteView;
