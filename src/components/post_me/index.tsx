import InstagramIdField from "@/components/post_me/components/InstagramIdField";
import InstatoonCategory from "@/components/post_me/components/InstatoonCategory";
import IntroductionField from "@/components/post_me/components/IntroductionField";
import PortfolioLinkField from "@/components/post_me/components/PortfolioLinkField";
import SubmitButton from "@/components/post_me/components/SubmitButton";
import { Box } from "@mui/material";

type Props = {};

function PostMEView({}: Props) {
	return (
		<Box className="w-full flex flex-col justify-center items-center p-10">
			<InstagramIdField />
			<IntroductionField />
			<InstatoonCategory />
			<PortfolioLinkField />
			<SubmitButton />
		</Box>
	);
}

export default PostMEView;
