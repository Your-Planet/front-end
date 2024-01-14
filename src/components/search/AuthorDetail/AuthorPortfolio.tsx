import SlickSlider from "@/components/common/SlickSlider/index";
import { Box } from "@mui/material";
import Image from "next/image";

interface itemsProps {
	link: string;
	name: string;
}

const items: itemsProps[] = [
	{
		link: "/images/link1.jpeg",
		name: "이미지01",
	},
	{
		link: "/images/link2.jpeg",
		name: "이미지02",
	},
	{
		link: "/images/link3.jpeg",
		name: "이미지03",
	},
	{
		link: "/images/link4.jpeg",
		name: "이미지04",
	},
	{
		link: "/images/link5.jpeg",
		name: "이미지05",
	},
	{
		link: "/images/link6.jpeg",
		name: "이미지06",
	},
	{
		link: "/images/link7.jpeg",
		name: "이미지07",
	},
	{
		link: "/images/link8.jpeg",
		name: "이미지08",
	},
];

function AuthorPortfolio() {
	return (
		<Box className="mt-3">
			<SlickSlider>
				{items.map((item) => (
					<Box className="w-full h-[310px] relative" key={item.name}>
						<Image className="px-1 box-border" src={item.link} alt={item.name} fill />
					</Box>
				))}
			</SlickSlider>
		</Box>
	);
}

export default AuthorPortfolio;
