import { LAYOUT_MARGIN_TOP } from "@/defines/common/constants";
import { Box } from "@mui/system";

type Props = {
	targetRef: React.RefObject<HTMLDivElement>;
};

function ScrollDownSection(props: Props) {
	const { targetRef } = props;

	const handleClick = () => {
		if (targetRef.current) {
			targetRef.current.style.scrollMarginTop = `${LAYOUT_MARGIN_TOP}px`;
			targetRef.current.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<Box className="flex justify-center items-center w-full h-[25vh]">
			<Box className="relative text-center z-[99] cursor-default pointer-events-none">
				<Box className="w-full h-full flex items-center justify-center mx-0 my-[10px]">
					<Box
						className="flex items-center justify-around flex-col w-auto cursor-pointer pointer-events-auto"
						onClick={handleClick}
					>
						<Box className="w-[35px] h-[60px] border-2 border-solid border-[#657385] rounded-[60px] relative before:content-[''] before:w-[8px] before:h-[8px] before:absolute before:top-[8px] before:left-2/4 before:translate-x-[-50%] before:bg-[#657385] before:rounded-[50%] before:opacity-100 before:animate-[wheel_2s_infinite]" />
						<Box className="text-center w-full font-normal text-[#657385] text-[16px] mx-0 my-[5px]">Scroll Down</Box>
					</Box>
				</Box>
			</Box>
		</Box>
	);
}

export default ScrollDownSection;
