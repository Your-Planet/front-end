import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";

type Props = {};

const AuthorCard = (props: Props) => {
	return (
		<Box className="group before:hover:scale-95 before:hover:h-72 before:hover:w-full before:hover:rounded-b-2xl before:transition-all before:duration-500 before:content-[''] before:w-full before:h-24 before:rounded-t-2xl before:bg-gradient-to-bl from-sky-200 via-orange-200 to-orange-700 before:absolute before:top-0 w-full h-72 relative bg-slate-50 flex flex-col items-center justify-center gap-2 text-center rounded-2xl overflow-hidden cursor-pointer">
			<Box className="author-thumbnail w-28 h-28 mt-8 rounded-full border-4 z-10 group-hover:scale-150 group-hover:-translate-x-24  group-hover:-translate-y-20 transition-all duration-500 relative">
				<Image
					className="rounded-full border-solid border-[3px] border-[transparent]"
					src="/images/manggom.jpeg"
					alt="망곰"
					fill
					draggable={false}
				/>
			</Box>
			<Box className="z-10 group-hover:-translate-y-10 transition-all duration-500">
				<span className="text-2xl font-semibold">망그러진곰</span>
				<p>@yurang_official</p>
			</Box>
		</Box>
	);
};

export default AuthorCard;
