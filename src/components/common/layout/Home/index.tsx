import { Box, Typography } from "@mui/material";
import Image from "next/image";

function Slogan() {
	return (
		<Box className="w-full h-except-header relative text-center flex justify-center items-center flex-col select-none">
			<Image
				className="animate-jump-in animate-duration-1000 animate-delay-[2100ms]"
				src="/images/your_planet.png"
				alt="your planet"
				width={150}
				height={150}
			/>
			<Box className="flex">
				<Typography className="font-black animate-fade-left animate-duration-1000" variant="h1">
					D
				</Typography>
				<Typography
					className="font-black animate-fade-up animate-duration-1000 animate-delay-[150ms] animate-ease-linear"
					variant="h1"
				>
					r
				</Typography>
				<Typography
					className="font-black animate-fade-down animate-duration-1000 animate-delay-[300ms] animate-ease-linear"
					variant="h1"
				>
					e
				</Typography>
				<Typography
					className="font-black animate-fade-right animate-duration-1000 animate-delay-[450ms] animate-ease-linear"
					variant="h1"
				>
					a
				</Typography>
				<Typography
					className="font-black animate-fade-left animate-duration-1000 animate-delay-[600ms] animate-ease-linear"
					variant="h1"
				>
					m
				</Typography>
				<Typography
					className="ml-5 font-black animate-flip-up animate-duration-1000 animate-delay-[750ms] animate-ease-linear"
					variant="h1"
				>
					Y
				</Typography>
				<Typography
					className="font-black animate-flip-down animate-duration-1000 animate-delay-[900ms] animate-ease-linear"
					variant="h1"
				>
					o
				</Typography>
				<Typography
					className="font-black animate-flip-up animate-duration-1000 animate-delay-[1050ms] animate-ease-linear"
					variant="h1"
				>
					u
				</Typography>
				<Typography
					className="font-black animate-flip-down animate-duration-1000 animate-delay-[1200ms] animate-ease-linear"
					variant="h1"
				>
					r
				</Typography>
				<Box className="flex animate-fade animate-duration-1000 animate-delay-[1350ms] animate-ease-linear">
					<Typography className="ml-5 font-black text-[#b2ebc9]" variant="h1">
						C
					</Typography>
					<Typography className="font-black text-[#f5e89d]" variant="h1">
						O
					</Typography>
					<Typography className="font-black text-[#b9daf6]" variant="h1">
						L
					</Typography>
					<Typography className="font-black text-[#e5adc0]" variant="h1">
						O
					</Typography>
					<Typography className="font-black text-[#ffb347]" variant="h1">
						R
					</Typography>
				</Box>
			</Box>
			<Box className="flex items-center mt-3">
				<Typography className="font-bold animate-fade-right animate-duration-1000 animate-delay-[1500ms]" variant="h4">
					온전히 나의 색에 집중
				</Typography>
			</Box>
		</Box>
	);
}

export default Slogan;
