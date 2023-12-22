import InstagramIdField from "@/components/post_me/instagramIdField";
import InstatoonCategory from "@/components/post_me/InstatoonCategory";
import IntroductionField from "@/components/post_me/IntroductionField";
import { Box } from "@mui/system";
import React from "react";

type Props = {};

const PostME = (props: Props) => {
	return (
		<Box className="w-full flex flex-col justify-center items-center p-10">
			<InstagramIdField />
			<IntroductionField />
			<InstatoonCategory />
		</Box>
	);
};

export default PostME;
