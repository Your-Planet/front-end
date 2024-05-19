import {
	StyledBlurBox,
	StyledBlurContainerBox,
	StyledBlurInnerBox,
} from "@/components/search/components/BlurBox/defines/styles";
import { IA } from "@/defines/ia/constants";
import { getIaPath } from "@/utils/ia";
import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

type Props = {};

function BlurBox(props: Props) {
	const router = useRouter();

	const handleClickLogin = () => {
		router.push(getIaPath(IA.login));
	};

	const handleClickJoin = () => {
		router.push(getIaPath(IA.join));
	};

	return (
		<StyledBlurBox>
			<StyledBlurContainerBox>
				<StyledBlurInnerBox>
					<Typography className="font-bold" variant="h6">
						로그인이 필요한 서비스입니다!
					</Typography>
					<Box className="gap-3 flex justify-end">
						<Button variant="outlined" onClick={handleClickJoin}>
							회원가입
						</Button>
						<Button variant="contained" onClick={handleClickLogin}>
							로그인
						</Button>
					</Box>
				</StyledBlurInnerBox>
			</StyledBlurContainerBox>
		</StyledBlurBox>
	);
}

export default BlurBox;
