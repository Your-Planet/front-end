import { FOOTER_BACKGROUND_COLOR, FOOTER_HEIGHT } from "@/components/common/layout/Footer/defines";
import { FOOTER_BORDER_TOP, WHITE_FONT_COLOR } from "@/defines/common/constants";
import { Box, Grid, Typography } from "@mui/material";

function Footer() {
	return (
		<Box
			sx={{
				color: WHITE_FONT_COLOR,
				backgroundColor: FOOTER_BACKGROUND_COLOR,
				height: FOOTER_HEIGHT,
			}}
			className="w-full flex justify-center items-center p-20 text-sm"
		>
			<Grid container spacing={2}>
				<Grid xs={6} item>
					<Box sx={{ borderTopColor: FOOTER_BORDER_TOP }} className="border-solid border-t">
						<Typography className="mt-1">Copyright ⓒ 2023 yourplanet All rights reserved.</Typography>
					</Box>
				</Grid>
				<Grid xs={4} item>
					<Box>
						<Typography>이용약관</Typography>
						<Typography>개인정보처리방침</Typography>
					</Box>
				</Grid>
				<Grid xs={2} item>
					<Box>SNS</Box>
				</Grid>
			</Grid>
		</Box>
	);
}

export default Footer;
