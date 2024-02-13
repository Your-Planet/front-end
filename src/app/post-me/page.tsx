import PostMeFormView from "@/components/post-me/PostMeFormView";
import { Box } from "@mui/material";

type Props = {};

function PostME(props: Props) {
	return (
		<Box className="w-full flex justify-center items-center bg-ghostwhite">
			<PostMeFormView />
		</Box>
	);
}

export default PostME;
