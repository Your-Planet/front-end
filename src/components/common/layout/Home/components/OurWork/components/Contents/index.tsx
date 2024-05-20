import MessageBox from "@/components/common/layout/Home/components/OurWork/components/MessageBox";
import { Box, Typography } from "@mui/material";

type Props = {};

function Contents({}: Props) {
	return (
		<Box className="flex flex-col w-full relative">
			<MessageBox className="absolute top-10 left-20" emoticon="🧐">
				<Box className="flex flex-col">
					<Typography variant="h6" fontWeight="bold">
						매일 그림을 그리고 있는데
					</Typography>
					<Box className="flex items-center">
						<Typography variant="h5" fontWeight="bold" color="blueviolet">
							광고주에게 언제&nbsp;
						</Typography>
						<Typography variant="h6" fontWeight="bold">
							연락이 올까요?
						</Typography>
					</Box>
				</Box>
			</MessageBox>
			<MessageBox className="absolute top-32 right-24" emoticon="😢">
				<Box className="flex flex-col">
					<Box className="flex items-center">
						<Typography variant="h6" fontWeight="bold">
							거래 후에
						</Typography>
						<Typography variant="h5" fontWeight="bold" color="blueviolet">
							&nbsp;대금
						</Typography>
						<Typography variant="h6" fontWeight="bold">
							을 준다고 했는데
						</Typography>
					</Box>
					<Box className="flex items-center">
						<Typography variant="h6" fontWeight="bold">
							아직까지도
						</Typography>
						<Typography variant="h5" fontWeight="bold" color="blueviolet">
							&nbsp;연락이 없어요!
						</Typography>
					</Box>
				</Box>
			</MessageBox>
			<MessageBox className="absolute bottom-14 left-36" emoticon="😤">
				<Box className="flex flex-col">
					<Typography variant="h6" fontWeight="bold">
						저는 2차 저작권을 허용한적 없는데
					</Typography>
					<Box className="flex items-center">
						<Typography variant="h6" fontWeight="bold">
							광고주
						</Typography>
						<Typography variant="h5" fontWeight="bold" color="blueviolet">
							&nbsp;마케팅에 계속 활용&nbsp;
						</Typography>
						<Typography variant="h6" fontWeight="bold">
							되고 있어요!
						</Typography>
					</Box>
				</Box>
			</MessageBox>
		</Box>
	);
}

export default Contents;
