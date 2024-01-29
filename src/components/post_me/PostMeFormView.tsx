"use client";

import { Box, FormControl } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import H2 from "../common/text/H2";
import { GenreType } from "../search/defines/types";
import InstagramIdField from "./InstagramIdField";
import InstatoonCategory from "./InstatoonCategory";
import IntroductionField from "./IntroductionField";
import PortfolioLinkField from "./PortfolioLinkField";
import SubmitButton from "./SubmitButton";
import { PostMeForm } from "./defines/types";

type Props = {};

function PostMeFormView(props: Props) {
	const instagramId = "instagram";

	const form = useForm<PostMeForm>({
		mode: "all",
		defaultValues: {
			instagramId: instagramId,
			authorIntroduction: "",
			instatoonGenre: new Set<GenreType>(),
			portfolioLinks: new Array<string>(),
		},
	});

	const {
		handleSubmit,
		setValue,
		trigger,
		formState: { errors },
	} = form;

	return (
		<Box className="flex flex-col max-w-fit justify-center items-center px-10 py-5 bg-white my-5 rounded-lg shadow-xl">
			<H2>포트폴리오 등록</H2>

			<FormProvider {...form}>
				<FormControl className="mt-8 gap-4">
					<InstagramIdField instagramId={instagramId} />
					<IntroductionField />
					<InstatoonCategory />
					<PortfolioLinkField />
					<SubmitButton />
				</FormControl>
			</FormProvider>
		</Box>
	);
}

export default PostMeFormView;
