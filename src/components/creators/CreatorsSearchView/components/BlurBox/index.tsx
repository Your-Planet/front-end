import MessageBoxForCreatorUser from "@/components/creators/CreatorsSearchView/components/BlurBox/components/MessageBoxForCreatorUser";
import MessageBoxForNonLogInUser from "@/components/creators/CreatorsSearchView/components/BlurBox/components/MessageBoxForNonLogInUser";
import {
	StyledBlurBox,
	StyledBlurContainerBox,
	StyledBlurInnerBox,
} from "@/components/creators/CreatorsSearchView/components/BlurBox/defines/styles";
import { useAuthContext } from "@/providers/AuthProvider/components/AuthClientProvider";

function BlurBox() {
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
