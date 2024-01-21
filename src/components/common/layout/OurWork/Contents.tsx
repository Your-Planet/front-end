import { Box, Typography } from "@mui/material";
import H5 from "../../text/H5";
import H6 from "../../text/H6";
import MessageBox from "./MessageBox";

type Props = {};

function Contents({}: Props) {
	return (
		<Box className="flex flex-col w-full relative">
			<MessageBox className="ml-8 my-1 absolute top-16 left-10" emoticon="🧐">
				<Box className="flex flex-col">
					<Typography variant="h6">매일 그림을 그리고 있는데</Typography>
					<Box className="flex">
						<H5 bold color="text-[#495AA3]">
							광고주에게 언제&nbsp;
						</H5>
						<H6>연락이 올까요?</H6>
					</Box>
				</Box>
			</MessageBox>
			<MessageBox className="mr-8 my-1 absolute top-28" emoticon="😢" direction="justify-end">
				<Box className="flex flex-col">
					<Box className="flex">
						<Typography variant="h6">거래 후에</Typography>
						<H5 bold color="text-[#495AA3]">
							&nbsp;대금
						</H5>
						<Typography variant="h6">을 준다고 했는데</Typography>
					</Box>
					<Box className="flex">
						<Typography className="inline-flex" variant="h6">
							아직까지도
						</Typography>
						<H5 bold color="text-[#495AA3]">
							&nbsp;연락이 없어요!
						</H5>
					</Box>
				</Box>
			</MessageBox>
			<MessageBox className="ml-36 my-1 absolute bottom-10" emoticon="😤">
				<Box className="flex flex-col">
					<Typography variant="h6">저는 2차 저작권을 허용한적 없는데</Typography>
					<Box className="flex">
						<Typography className="inline-flex" variant="h6">
							광고주
						</Typography>
						<H5 bold color="text-[#495AA3]">
							&nbsp;마케팅에 계속 활용&nbsp;
						</H5>
						<Typography variant="h6">되고 있어요!</Typography>
					</Box>
				</Box>
			</MessageBox>
		</Box>
	);
}

export default Contents;
