import { Box } from "@mui/system";
import Image from "next/image";

export interface ProfileImageProps {
	src: string;
	size?: number;
}

function ProfileImage(props: ProfileImageProps) {
	const { src, size = 80 } = props;

	return (
		<Box
			sx={{
				width: `${size}px`,
				height: `${size}px`,
				position: "relative",
			}}
		>
			<Image
				src={src}
				alt={src}
				layout={"fill"}
				style={{
					borderRadius: "8px",
				}}
			/>
		</Box>
	);
}

export default ProfileImage;
