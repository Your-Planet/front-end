import AuthGuard from "@/components/common/AuthGuard";
import InstagramIdField from "@/components/post_me/InstagramIdField";
import InstatoonCategory from "@/components/post_me/InstatoonCategory";
import IntroductionField from "@/components/post_me/IntroductionField";
import PortfolioLinkField from "@/components/post_me/PortfolioLinkField";
import SubmitButton from "@/components/post_me/SubmitButton";
import { Box } from "@mui/material";

type Props = {};

function PostME(props: Props) {
	return (
		<AuthGuard allowedMemberTypes={["ADVERTISER"]}>
			<Box className="w-full flex flex-col justify-center items-center p-10">
				<InstagramIdField />
				<IntroductionField />
				<InstatoonCategory />
				<PortfolioLinkField />
				<SubmitButton />
			</Box>
		</AuthGuard>
	);
}

export default PostME;
