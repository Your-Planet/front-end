"use client";

import { Box, Button, Divider } from "@mui/material";
import Link from "next/link";
import { useRecoilValue } from "recoil";
import { selectedAuthorState } from "../../../recoil/selectors/search";
import { SelectedAuthorType } from "../defines/types";
import AuthorInstagramId from "./AuthorInstagramId";
import AuthorIntroduction from "./AuthorIntroduction";
import AuthorName from "./AuthorName";
import AuthorPortfolio from "./AuthorPortfolio";
import AuthorProfile from "./AuthorProfile";
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
			<AuthorName authorName={authorName} />
			<Box className="flex items-center">
				<AuthorProfile />
				<Box className="flex w-full flex-col">
					<AuthorInstagramId instagramId={instagramId} />
					<AuthorIntroduction introduction={introduction} />
					<Hashtags hashtags={hashtags} />
					<Link href={`/search/${instagramId}/request`} passHref>
						<Button className="mt-5" variant="contained" component="a" fullWidth>
							문의하기
						</Button>
					</Link>
				</Box>
			</Box>
			<Divider />
			<AuthorPortfolio />
		</Box>
	);
}

export default AuthorDetail;
