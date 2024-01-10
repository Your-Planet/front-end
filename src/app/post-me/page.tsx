import InstagramIdField from "@/components/post_me/instagramIdField";
import InstatoonCategory from "@/components/post_me/InstatoonCategory";
import IntroductionField from "@/components/post_me/IntroductionField";
import PortfolioLinkField from "@/components/post_me/PortfolioLinkField";
import SubmitButton from "@/components/post_me/SubmitButton";
import { Box } from "@mui/system";
import React from "react";

type Props = {};

const PostME = (props: Props) => {
	return (
		<Box className="w-full flex flex-col justify-center items-center p-10">
			<InstagramIdField />
			<IntroductionField />
			<InstatoonCategory />
			<PortfolioLinkField />
			<SubmitButton />
		</Box>
	);
};

export default PostME;
