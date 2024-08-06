import CreatorUser from "@/components/creators/components/BlurBox/components/CreatorUser";
import NonLogInUser from "@/components/creators/components/BlurBox/components/NonLogInUser";
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
					{jwtPayload && jwtPayload.memberType === "CREATOR" ? <CreatorUser /> : <NonLogInUser />}
				</StyledBlurInnerBox>
			</StyledBlurContainerBox>
		</StyledBlurBox>
	);
}

export default BlurBox;
