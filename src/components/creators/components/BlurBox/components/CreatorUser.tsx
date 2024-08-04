import { TYPOGRAPHY_BOX_WIDTH } from "@/components/creators/components/BlurBox/defines/constants";
import { StyledButtonBoxInBlurBox, StyledTypographyBox } from "@/components/creators/components/BlurBox/defines/styles";
import { Button, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

type Props = {};

function CreatorUser({}: Props) {
	return (
		<>
			<StyledTypographyBox>
				<Typography className="font-bold" variant="h6">
					이 페이지는 광고주에게만 보여져요.
				</Typography>
				<Typography
					className="font-bold"
					variant="body2"
					color={grey[500]}
					width={`${TYPOGRAPHY_BOX_WIDTH}px`}
					align="center"
				>
					내 정보가 어떻게 보이는지 알고 싶다면?
				</Typography>
			</StyledTypographyBox>

			<StyledButtonBoxInBlurBox>
				{/* TODO: @eunchan / 미리보기 창 만들기 */}
				<Button fullWidth variant="contained">
					광고주 화면 미리보기
				</Button>
			</StyledButtonBoxInBlurBox>
		</>
	);
}

export default CreatorUser;
