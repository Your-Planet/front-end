"use client";

import { Box, Link, Typography } from "@mui/material";
import Image from "next/image";
import { useRecoilValue } from "recoil";
import { selectedAuthorState } from "../../../recoil/selectors/search";
import { SelectedAuthorType } from "../defines/types";

function AuthorDetail() {
	const { authorName, profilePictureUrl, instagramId } = useRecoilValue<SelectedAuthorType>(selectedAuthorState);
	const introduction = `망그러져도 괜찮아~ ʕ•̀ﻌ•́ʔ`;
	// TODO: backend에서 가져오기. authorname이나 profile 등도 함께. 임시로 사용

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
								alt={authorName || "undefined"}
								fill
								sizes="100%"
								draggable={false}
							/>
						</Box>
					</Box>
				)}
				<Box className="flex w-[450px] flex-col">
					<Box>
						<Typography className="font-bold" variant="h6">
							<Link href={`https://www.instagram.com/${instagramId}`} rel="noopener noreferrer" underline="hover">
								{instagramId ? `@${instagramId}` : "undefined"}
							</Link>
						</Typography>
					</Box>
					<Box className="flex items-center w-full h-32">
						<Typography variant="body1" paragraph sx={{ whiteSpace: "pre-wrap" }}>
							{introduction ? `${introduction}` : "undefined"}
						</Typography>
					</Box>
					<Box className="flex">
						<Typography variant="body2">#인스타툰</Typography>
						<Typography className="ml-2" variant="body2">
							#망곰이
						</Typography>
						<Typography className="ml-2" variant="body2">
							#일상툰
						</Typography>
					</Box>
				</Box>
			</Box>
		</Box>
	);
}

export default AuthorDetail;
