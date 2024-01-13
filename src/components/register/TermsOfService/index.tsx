import { MemberType } from "@/defines/member/types";
import {
	personalInformationTosText,
	requiredTosText,
	shoppingInformationReceiptText,
} from "@/defines/termsOfService/constants";
import { tosCheckedContext, tosOpenContext } from "@/recoil/atoms/TermsOfService";
import { tosCheckedState } from "@/recoil/selectors/TermsOfService";
import { Alert, Button, Dialog, DialogActions, DialogTitle, Divider, Snackbar } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import DialogContentWithCheckBox from "./DialogContentWithCheckBox";
import { FALSE_TOS_CHECKED_STATE } from "./defines/constants";
import { snackbarStateType, tosCheckedStateType } from "./defines/types";

type Props = {
	selectedMember: MemberType | null;
};

function TermsOfService({ selectedMember }: Props) {
	const router = useRouter();
	const [tosOpen, setTosOpen] = useRecoilState<boolean>(tosOpenContext);
	const [_, setTosState] = useRecoilState<tosCheckedStateType>(tosCheckedContext);
	const [snackbarState, setSnackbarState] = useState<snackbarStateType>({
		snackbarOpen: false,
		vertical: "top",
		horizontal: "center",
	});
	const tosCheckedStates = useRecoilValue<tosCheckedStateType>(tosCheckedState);
	const { snackbarOpen, vertical, horizontal } = snackbarState;

	const handleOpenSnackbar = () => {
		setSnackbarState({ ...snackbarState, snackbarOpen: true });
	};

	const handleCloseSnackbar = () => {
		setSnackbarState({ ...snackbarState, snackbarOpen: false });
	};

	const handleCloseWithAgree = () => {
		if (!selectedMember) return;

		const { ALL, REQUIRED, PERSONAL_INFORMATION } = tosCheckedStates;

		if (ALL || (REQUIRED && PERSONAL_INFORMATION)) {
			setTosOpen(false);
			router.push(`register/${selectedMember.toLowerCase()}`);
		} else {
			handleOpenSnackbar();
		}
	};

	const handleCloseWithDisagree = () => {
		setTosState(FALSE_TOS_CHECKED_STATE);
		setTosOpen(false);
	};

	const dialogStyle = {
		".MuiPaper-root": {
			padding: "0 2rem",
		},
	};

	return (
		<>
			<Dialog
				className="min-w-[400px]"
				open={tosOpen}
				onClose={handleCloseWithDisagree}
				fullWidth
				maxWidth="md"
				sx={dialogStyle}
			>
				<DialogTitle className="text-base px-0">약관 동의</DialogTitle>
				<Divider className="border-b-2 border-black" />
				<DialogContentWithCheckBox label="ALL" content="회원가입 약관에 모두 동의합니다" />
				<Divider />
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
					tosText={shoppingInformationReceiptText}
				/>
				<DialogActions>
					<Button variant="contained" color="error" onClick={handleCloseWithDisagree}>
						동의안함
					</Button>
					<Button variant="contained" onClick={handleCloseWithAgree}>
						동의
					</Button>
				</DialogActions>
			</Dialog>
			<Snackbar
				onClose={handleCloseSnackbar}
				anchorOrigin={{ vertical, horizontal }}
				open={snackbarOpen}
				key={vertical + horizontal}
				autoHideDuration={2000}
			>
				<Alert elevation={2} variant="filled" severity="error">
					필수 약관에 동의가 필요합니다!
				</Alert>
			</Snackbar>
		</>
	);
}

export default TermsOfService;
