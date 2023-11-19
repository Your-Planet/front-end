import { Box } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { TITLE_BACKGROUND_COLOR, TITLE_COLOR } from "./defines/";

const HomeVideo = () => {
	const [videoLoaded, setVideoLoaded] = useState(false);
	const videoRef = useRef<HTMLVideoElement>(null);

	useEffect(() => {
		const handleVideoLoad = () => {
			setVideoLoaded(true);
		};

		if (videoRef) {
			videoRef.current?.addEventListener("loadeddata", handleVideoLoad);
		}

		return () => {
			if (videoRef.current?.removeEventListener("loadeddata", handleVideoLoad));
		};
	}, []);

	return (
		<section className="w-full h-screen relative text-center">
			<video
				className="w-full h-screen object-cover"
				src="https://imgur.com/cRGPMFq.mp4"
				ref={videoRef}
				autoPlay
				loop
				muted
			></video>
			{videoLoaded && (
				<Box
					sx={{ color: TITLE_COLOR, backgroundColor: TITLE_BACKGROUND_COLOR }}
					className="flex flex-col justify-center items-center absolute text-center bottom-0 left-0 right-0 select-none w-full h-full text-3xl/3 font-bold mx-0 my-0"
				>
					<p>당신의 색을 온전히 보여주세요.</p>
					<p>
						나머지는 <strong className="text-4xl">Your Planet</strong> 이 할게요
					</p>
				</Box>
			)}
		</section>
	);
};

export default HomeVideo;
