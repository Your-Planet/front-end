"use client";

import {
	personalInformationTosText,
	requiredTosText,
	shoppingInformationReceiptText,
} from "@/defines/termsOfService/constants";
import { Box, Button, DialogActions, Typography } from "@mui/material";
import DialogContentWithCheckBox from "./DialogContentWithCheckBox";

type Props = {};

function TermsOfService(props: Props) {
	return (
		<>
			<Box className="max-w-[500px] w-full flex flex-col justify-between py-7 m-auto gap-7">
				<Box className="flex flex-col">
					<Typography className="font-bold" variant="h4">
						가입을 위해,
					</Typography>
					<Typography className="font-bold" variant="h4">
						약관 동의가 필요해요.
					</Typography>
				</Box>

				<Box className="flex flex-col gap-5">
					<DialogContentWithCheckBox label="ALL" content="회원가입 약관에 모두 동의합니다" />
					<DialogContentWithCheckBox label="REQUIRED" content="이용약관 동의" required tosText={requiredTosText} />
					<DialogContentWithCheckBox
						label="PERSONAL_INFORMATION"
						content="개인정보 수집 및 이용 동의"
						required
						tosText={personalInformationTosText}
					/>
					<DialogContentWithCheckBox
						label="SHOPPING_INFORMATION_RECEIPT"
						content="쇼핑정보 수집 및 이용 동의"
						optional
						tosText={shoppingInformationReceiptText}
					/>
					<DialogActions>
						<Button variant="contained" color="error">
							동의안함
						</Button>
						<Button variant="contained">동의</Button>
					</DialogActions>
				</Box>
			</Box>
		</>
	);
}

export default TermsOfService;
