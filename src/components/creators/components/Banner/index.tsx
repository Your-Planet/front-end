import {
	StyledAnimatedBoxInBanner,
	StyledBoxInBanner,
	StyledTypographyAnimatedBoxInBanner,
	StyledTypographyBoxInBanner,
} from "@/components/creators/components/Banner/defines/styles";
import { Box, Typography } from "@mui/material";

function Banner() {
	return (
		<StyledBoxInBanner>
			<Box>
				<StyledAnimatedBoxInBanner>
					<StyledTypographyBoxInBanner>
						<Typography variant="h1" fontWeight="bold">
							PARTNER
						</Typography>
					</StyledTypographyBoxInBanner>
				</StyledAnimatedBoxInBanner>
				<StyledTypographyAnimatedBoxInBanner>
					<Typography variant="h6" color="GrayText">
						유어플래닛은 광고 목적에 맞게 인스타툰 통합 솔루션을 제공합니다.
					</Typography>
				</StyledTypographyAnimatedBoxInBanner>
			</Box>
		</StyledBoxInBanner>
	);
}

export default Banner;
