import { DEFAULT_CATEGORY } from "@/components/mypage/studio/StudioProfileView/defines/constants";
import Filter from "@/components/search/components/SearchAuthorFormView/components/Filter";
import Header from "@/components/search/components/SearchAuthorFormView/components/Header";
import SortSection from "@/components/search/components/SearchAuthorFormView/components/SortSection";
import { SearchAuthorForm } from "@/components/search/components/SearchAuthorFormView/defines/types";
import { Box } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";

type Props = {};

function SearchAuthorFormView({}: Props) {
	const form = useForm<SearchAuthorForm>({
		mode: "onSubmit",
		defaultValues: {
			category: DEFAULT_CATEGORY,
		},
	});

	const { getValues } = form;

	// TODO: @나은찬 결과 확인용, 지우기
	const category = getValues("category");
	console.log(category);

	return (
		<FormProvider {...form}>
			<Box display="flex" gap="3rem" flexDirection="column">
				<Header />
				<Box display="flex" gap="1rem" flexDirection="column">
					<Box display="flex" justifyContent="space-between" alignItems="center">
						<Filter />
						<SortSection />
					</Box>
					{/* TODO: @나은찬 필터 결과 표시 */}
					<Box>필터 결과</Box>
				</Box>
			</Box>
		</FormProvider>
	);
}

export default SearchAuthorFormView;
