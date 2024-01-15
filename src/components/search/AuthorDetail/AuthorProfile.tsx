import { Box } from "@mui/material";
import Image from "next/image";

type Props = {};

function AuthorProfile(props: Props) {
	return (
		<Box className="flex justify-center items-center w-[50%] h-[300px]">
			<Box className="w-[150px] h-[150px] mt-8 rounded-full border-4 relative">
				<Image
					className="rounded-full border-solid border-[2px] border-gray-300"
					src="/images/manggom.jpeg"
					alt="author profile"
					fill
					sizes="100%"
					draggable={false}
				/>
			</Box>
		</Box>
	);
}

export default AuthorProfile;
