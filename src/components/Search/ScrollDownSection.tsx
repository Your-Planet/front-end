import { Box } from "@mui/system";

const ScrollDownSection = () => {
	return (
		<Box className="flex justify-center items-center w-full h-[25vh]">
			<Box className="relative text-center z-[99] cursor-default pointer-events-none">
				<Box className="w-full h-full flex items-center justify-center mx-0 my-[10px]">
					<Box className="flex items-center justify-around flex-col w-auto cursor-pointer pointer-events-auto">
						<Box className="w-[35px] h-[60px] border-2 border-solid border-[#657385] rounded-[60px] relative before:content-[''] before:w-[8px] before:h-[8px] before:absolute before:top-[8px] before:left-2/4 before:translate-x-[-50%] before:bg-[#657385] before:rounded-[50%] before:opacity-100 before:animate-[wheel_2s_infinite]"></Box>
						<Box className="text-center w-full font-normal text-[#657385] text-[16px] mx-0 my-[5px]">Scroll Down</Box>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default ScrollDownSection;
