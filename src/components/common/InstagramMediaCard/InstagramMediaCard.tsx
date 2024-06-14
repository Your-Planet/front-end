import { InstagramMedia } from "@/apis/instagram";
import EllipsisBox from "@/components/common/EllipsisBox";
import { Box } from "@mui/material";
import { grey } from "@mui/material/colors";
import Image from "next/image";

export interface InstagramMediaCardProps {
	instagramMedia: InstagramMedia;
	width: number;
}

const SIDE_PADDING = 12;
const IMAGE_SIZE = 72;
const GAP = 24;

function InstagramMediaCard(props: InstagramMediaCardProps) {
	const {
		instagramMedia: { permalink, caption },
		width,
	} = props;

	const thumbnailUrl = permalink ? `${permalink}media/?size=l` : "";

	return (
		<Box
			sx={{
				borderRadius: "6px",
				border: `1px solid ${grey[300]}`,
				boxShadow: `4px 4px 10px ${grey[200]}`,
				display: "flex",
				gap: `${GAP}px`,
				padding: `16px ${SIDE_PADDING}px`,
				width: `${width}px`,
			}}
		>
			<Image src={thumbnailUrl} alt={caption} width={72} height={72} />
			<EllipsisBox
				line={4}
				sx={{
					width: width - SIDE_PADDING * 2 - IMAGE_SIZE - GAP,
					lineHeight: 1.2,
				}}
			>
				{caption}
			</EllipsisBox>
		</Box>
	);
}

export default InstagramMediaCard;
