"use client";

import H2 from "@/components/common/text/H2";
import {
	inputProps,
	StyledBackButton,
	StyledButton,
	StyledEmailBox,
	StyledInput,
} from "@/components/find/CompleteFindEmail/defines/styles";
import { StyledBox } from "@/components/find/defines/styles";

import { Box } from "@mui/material";

type Props = {};

function CompleteFindEmail({}: Props) {
	return (
		<StyledBox>
			<H2>고객님의 이메일 정보입니다.</H2>

			<Box className="complete-find-email-box">
				<StyledEmailBox>
					<StyledInput readOnly disableUnderline fullWidth value={"email"} inputProps={{ ...inputProps }} />
				</StyledEmailBox>

				<StyledBackButton variant="contained" size="large">
					비밀번호 찾기
				</StyledBackButton>
				<StyledButton variant="contained" size="large">
					로그인 화면으로 돌아가기
				</StyledButton>
			</Box>
		</StyledBox>
	);
}

export default CompleteFindEmail;
