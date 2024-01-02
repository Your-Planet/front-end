import { Box } from "@mui/material";
import { WHITE_FONT_COLOR } from "@/defines/common/constants";
import { HEADER_HEIGHT } from "../Header/defines/constants";
import { TITLE_BACKGROUND_COLOR } from "./defines/constants";

function HomeVideo() {
	return (
		<section className="w-full h-screen relative text-center">
			<video className="w-full h-screen object-cover" src="/videos/home_video.mp4" autoPlay loop muted />
			<Box
				sx={{ color: WHITE_FONT_COLOR, backgroundColor: TITLE_BACKGROUND_COLOR }}
				className="flex flex-col justify-center items-center absolute text-center bottom-0 left-0 right-0 select-none w-full h-full text-3xl/3 font-bold mx-0 my-0"
			>
				<p>당신의 색을 온전히 보여주세요.</p>
				<br />
				<p>
					나머지는 <strong className="text-4xl">Your Planet</strong> 이 할게요
				</p>
			</Box>
		</section>
	);
}

export default HomeVideo;
