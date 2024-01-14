"use client";

import { Box, Divider, Typography } from "@mui/material";
import Image from "next/image";
import { useRecoilValue } from "recoil";
import { selectedAuthorState } from "../../../recoil/selectors/search";
import { SelectedAuthorType } from "../defines/types";
import AuthorInstagramId from "./AuthorInstagramId";
import Hashtags from "./Hashtags";

function AuthorDetail() {
	const { authorName, profilePictureUrl, instagramId } = useRecoilValue<SelectedAuthorType>(selectedAuthorState);
	const introduction = `망그러져도 괜찮아~ ʕ•̀ﻌ•́ʔ`;
	const hashtags = ["인스타툰", "망곰이", "일상툰"];
	// TODO: backend에서 가져오기. authorname이나 profile 등도 함께. 임시로 사용
	// TODO: hashtag도 가입 or 마이 페이지에서 입력받도록?

	// TODO: loading 창 필요할듯. recoil-persist 사용하는데, 데이터 읽어들일 때까지 error, load 되면 ok
	return (
		<Box className="flex mx-20 p-20 flex-col">
			<Box className="flex">
				<Typography className="font-bold" variant="h5">
					{authorName}
				</Typography>
			</Box>
			<Box className="flex items-center">
				{profilePictureUrl ? (
					"image"
				) : (
					<Box className="flex justify-center items-center w-[300px] h-[300px]">
						<Box className="w-[150px] h-[150px] mt-8 rounded-full border-4 relative">
							<Image
								className="rounded-full border-solid border-[2px] border-gray-300"
								src="/images/manggom.jpeg"
								alt={authorName}
								fill
								sizes="100%"
								draggable={false}
							/>
						</Box>
					</Box>
				)}
				<Box className="flex w-[450px] flex-col">
					<AuthorInstagramId instagramId={instagramId} />
					<Box className="flex items-center w-full h-32">
						<Typography variant="body1" paragraph sx={{ whiteSpace: "pre-wrap" }}>
							{introduction ? `${introduction}` : "undefined"}
						</Typography>
					</Box>
					<Hashtags hashtags={hashtags} />
				</Box>
			</Box>
			<Divider />
			<Box className="flex flex-col"></Box>
		</Box>
	);
}

export default AuthorDetail;
