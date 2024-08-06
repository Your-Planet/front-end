import MessageBoxForCreatorUser from "@/components/creators/components/BlurBox/components/MessageBoxForCreatorUser";
import MessageBoxForNonLogInUser from "@/components/creators/components/BlurBox/components/MessageBoxForNonLogInUser";
import {
	StyledBlurBox,
	StyledBlurContainerBox,
	StyledBlurInnerBox,
} from "@/components/creators/components/BlurBox/defines/styles";
import { useAuthContext } from "@/providers/AuthProvider/components/AuthClientProvider";

type Props = {};

function BlurBox(props: Props) {
	const { jwtPayload } = useAuthContext();

	return (
		<StyledBlurBox>
			<StyledBlurContainerBox>
				<StyledBlurInnerBox>
					{jwtPayload && jwtPayload.memberType === "CREATOR" ? (
						<MessageBoxForCreatorUser />
					) : (
						<MessageBoxForNonLogInUser />
					)}
				</StyledBlurInnerBox>
			</StyledBlurContainerBox>
		</StyledBlurBox>
	);
}

export default BlurBox;
