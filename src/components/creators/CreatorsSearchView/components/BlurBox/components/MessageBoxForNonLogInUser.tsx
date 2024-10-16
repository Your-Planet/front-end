import { TYPOGRAPHY_BOX_WIDTH } from "@/components/creators/CreatorsSearchView/components/BlurBox/defines/constants";
import {
	StyledButtonBoxInBlurBox,
	StyledTypographyBox,
} from "@/components/creators/CreatorsSearchView/components/BlurBox/defines/styles";
import { IA } from "@/defines/ia/constants";
import { getIaPath } from "@/utils/ia";
import { Button, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useRouter } from "next/navigation";

type Props = {};

function MessageBoxForNonLogInUser({}: Props) {
	const router = useRouter();

	const handleClickLogin = () => {
		router.push(getIaPath(IA.login));
	};

	const handleClickJoin = () => {
		router.push(getIaPath(IA.join));
	};

	return (
		<>
			<StyledTypographyBox>
				<Typography className="font-bold" variant="h6">
					유어플래닛에 무사히 도달하신 것을 환영합니다!
				</Typography>
				<Typography
					className="font-bold"
					variant="body2"
					color={grey[500]}
					width={`${TYPOGRAPHY_BOX_WIDTH}px`}
					align="center"
				>
					지금 로그인하고, 유어플래닛의 모든 작가들을 만나보세요!
				</Typography>
			</StyledTypographyBox>

			<StyledButtonBoxInBlurBox>
				<Button fullWidth variant="contained" onClick={handleClickLogin}>
					로그인 하러가기
				</Button>
				<Button fullWidth variant="outlined" onClick={handleClickJoin}>
					계정 만들기
				</Button>
			</StyledButtonBoxInBlurBox>
		</>
	);
}

export default MessageBoxForNonLogInUser;
