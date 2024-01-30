"use client";

import useMutationPostMe from "@/hooks/queries/post/useMutationPostPortfolio";
import { Box } from "@mui/material";
import { FormEventHandler } from "react";
import { FormProvider, useForm } from "react-hook-form";
import H2 from "../common/text/H2";
import usePostMe from "../register/form/hooks/usePostMe";
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
		formState: { errors },
	} = form;

	const { mutate: mutatePostMe } = useMutationPostMe({});

	const { handleSuccessPostMe, handleFailPostMe } = usePostMe();

	const handleFormSubmit: FormEventHandler = handleSubmit((data) => {
		mutatePostMe({ ...data }),
			{
				onSuccess: handleSuccessPostMe,
				onError: handleFailPostMe,
			};
	});

	return (
		<Box className="flex flex-col gap-4 max-w-fit justify-center items-center px-10 py-5 bg-white my-5 rounded-lg shadow-xl">
			<H2>포트폴리오 등록</H2>
			<FormProvider {...form}>
				<form className="flex flex-col gap-4 mt-8" onSubmit={handleFormSubmit}>
					<InstagramIdField instagramId={instagramId} />
					<IntroductionField />
					<InstatoonCategory />
					<PortfolioLinkField />
					<SubmitButton />
				</form>
			</FormProvider>
		</Box>
	);
}

export default PostMeFormView;
