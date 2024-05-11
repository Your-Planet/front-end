import AnimatedText from "@/components/common/layout/Home/components/Slogan/components/AnimatedText";
import {
	StyledContainerInSlogan,
	StyledFlexBoxInSlogan,
	StyledImageInSlogan,
	StyledTextBoxInSlogan,
} from "@/components/common/layout/Home/components/Slogan/defines/styles";
import { Box, Typography } from "@mui/material";

function Slogan() {
	// TODO @나은찬 : animation은 디자인 이후에 수정 필요
	return (
		<StyledContainerInSlogan>
			<StyledImageInSlogan src="/images/your_planet.png" alt="your planet" width={150} height={150} priority />
			<StyledFlexBoxInSlogan>
				<AnimatedText text="D" animate="animate-fade-left" />
				<AnimatedText text="r" animate="animate-fade-up" delay="100" />
				<AnimatedText text="e" animate="animate-fade-down" delay="200" />
				<AnimatedText text="a" animate="animate-fade-right" delay="300" />
				<AnimatedText text="m" animate="animate-fade-left" delay="400" />
				<AnimatedText text="Y" animate="animate-flip-up" delay="500" margin="ml-5" />
				<AnimatedText text="o" animate="animate-flip-down" delay="600" />
				<AnimatedText text="u" animate="animate-flip-up" delay="700" />
				<AnimatedText text="r" animate="animate-flip-down" delay="800" />
				<Box className="flex animate-fade animate-duration-[1500ms] animate-delay-[1500ms] animate-ease-linear">
					<Typography fontFamily="Futura-pt-bold" className="ml-5 font-black text-[#b2ebc9]" variant="h1">
						C
					</Typography>
					<Typography fontFamily="Futura-pt-bold" className="font-black text-[#f5e89d]" variant="h1">
						O
					</Typography>
					<Typography fontFamily="Futura-pt-bold" className="font-black text-[#b9daf6]" variant="h1">
						L
					</Typography>
					<Typography fontFamily="Futura-pt-bold" className="font-black text-[#e5adc0]" variant="h1">
						O
					</Typography>
					<Typography fontFamily="Futura-pt-bold" className="font-black text-[#ffb347]" variant="h1">
						R
					</Typography>
				</Box>
			</StyledFlexBoxInSlogan>
			<StyledTextBoxInSlogan>
				<AnimatedText text="온전히 나의 색에 집중" animate="animate-fade-right" delay="2500" variant="h4" />
			</StyledTextBoxInSlogan>
		</StyledContainerInSlogan>
	);
}

export default Slogan;
