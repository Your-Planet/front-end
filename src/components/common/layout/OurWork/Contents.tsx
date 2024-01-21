import { Box } from "@mui/material";
import H5 from "../../text/H5";
import H6 from "../../text/H6";
import MessageBox from "./MessageBox";

type Props = {};

function Contents({}: Props) {
	return (
		<Box className="flex flex-col w-full relative">
			<MessageBox className="absolute top-10 left-20" emoticon="🧐">
				<Box className="flex flex-col">
					<H6>매일 그림을 그리고 있는데</H6>
					<Box className="flex items-center">
						<H5 bold color="text-[#495AA3]">
							광고주에게 언제&nbsp;
						</H5>
						<H6>연락이 올까요?</H6>
					</Box>
				</Box>
			</MessageBox>
			<MessageBox className="absolute top-32 right-24" emoticon="😢">
				<Box className="flex flex-col">
					<Box className="flex items-center">
						<H6>거래 후에</H6>
						<H5 bold color="text-[#495AA3]">
							&nbsp;대금
						</H5>
						<H6>을 준다고 했는데</H6>
					</Box>
					<Box className="flex items-center">
						<H6>아직까지도</H6>
						<H5 bold color="text-[#495AA3]">
							&nbsp;연락이 없어요!
						</H5>
					</Box>
				</Box>
			</MessageBox>
			<MessageBox className="absolute bottom-14 left-36" emoticon="😤">
				<Box className="flex flex-col">
					<H6>저는 2차 저작권을 허용한적 없는데</H6>
					<Box className="flex items-center">
						<H6>광고주</H6>
						<H5 bold color="text-[#495AA3]">
							&nbsp;마케팅에 계속 활용&nbsp;
						</H5>
						<H6>되고 있어요!</H6>
					</Box>
				</Box>
			</MessageBox>
		</Box>
	);
}

export default Contents;
