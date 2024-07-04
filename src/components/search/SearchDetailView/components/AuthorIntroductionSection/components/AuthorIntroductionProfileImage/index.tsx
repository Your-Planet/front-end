import { Box } from "@mui/material";

const IMAGE_SIZE = 144;

/* TODO @김현규 프로필 사진 */
function AuthorIntroductionProfileImage() {
	return (
		<Box
			sx={{
				width: IMAGE_SIZE,
				height: IMAGE_SIZE,
				borderRadius: "50%",

				// TODO @김현규 프로필 이미지 노출 시 삭제
				background: "lightgray",
			}}
		>
			<></>
		</Box>
	);
}

export default AuthorIntroductionProfileImage;
