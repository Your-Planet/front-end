"use client";

import H2 from "@/components/common/text/H2";
import {
	EmailInputProps,
	StyledEmailBox,
	StyledEmailInput,
} from "@/components/find/components/FindEmailComplete/defines/styles";
import { StyledBoxInFind, StyledButtonBoxInFind } from "@/components/find/defines/styles";
import { IA } from "@/defines/ia/constants";
import { SESSION_STORAGE } from "@/defines/sessionStorage/constants";
import { getIaPath } from "@/utils/ia";
import { Box, Button } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type Props = {};

function FindEmailComplete({}: Props) {
	const [email, setEmail] = useState<string | null>(null);
	const router = useRouter();
	const hoverGray = grey[600];

	useEffect(() => {
		// @TODO: 나은찬 세션 만료 시간 필요
		// if email is null, complete view 접근 금지
		setEmail(sessionStorage.getItem(SESSION_STORAGE.foundEmail));
	}, []);

	const handleClickBackButton = () => {
		sessionStorage.removeItem(SESSION_STORAGE.foundEmail);
		router.push(getIaPath(IA.find.pw));
	};

	const handleClickLoginButton = () => {
		sessionStorage.removeItem(SESSION_STORAGE.foundEmail);
		router.push(getIaPath(IA.login));
	};

	return (
		<StyledBoxInFind>
			<H2>고객님의 이메일 정보입니다.</H2>

			<Box className="complete-find-email-box">
				<StyledEmailBox>
					<StyledEmailInput readOnly disableUnderline fullWidth value={email} inputProps={{ ...EmailInputProps }} />
				</StyledEmailBox>

				<StyledButtonBoxInFind>
					<Button variant="contained" size="large" onClick={handleClickBackButton}>
						비밀번호 찾기
					</Button>
					<Button
						variant="contained"
						size="large"
						sx={{ bgcolor: "gray", ":hover": { bgcolor: hoverGray } }}
						onClick={handleClickLoginButton}
					>
						로그인 화면으로 돌아가기
					</Button>
				</StyledButtonBoxInFind>
			</Box>
		</StyledBoxInFind>
	);
}

export default FindEmailComplete;
