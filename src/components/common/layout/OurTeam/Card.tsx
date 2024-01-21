import { Box } from "@mui/material";
import Image from "next/image";
import H4 from "../../text/H4";

type Props = {
	text: string;
	backgroundColor: string; // for tailwindcss
	imageSrc: string;
	imageAlt: string;
};

function Card(props: Props) {
	const { text, backgroundColor, imageSrc, imageAlt } = props;

	return (
		<Box
			className={`flex flex-col p-10 ${backgroundColor} w-[260px] h-[250px] mx-2 my-0 rounded-xl hover:-translate-y-2 duration-500`}
		>
			<Box className="flex justify-center items-center relative w-16 h-16 rounded-full bg-white">
				<Image src={imageSrc} alt={imageAlt} width={50} height={50} priority />
			</Box>
			<Box className="py-8">
				<H4 bold>{text}</H4>
			</Box>
		</Box>
	);
}

export default Card;
