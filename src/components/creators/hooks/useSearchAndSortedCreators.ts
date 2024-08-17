import { GetCreatorsRequest } from "@/apis/studio/models/creators";
import { SortByType } from "@/components/creators/components/CreatorsView/components/CreatorsFilter/defines/type";
import { useCreatorsSearchParams } from "@/components/creators/hooks/useCreatorsSearchParams";
import { sortByAssociation, sortByFastest, sortByPopularity } from "@/components/creators/utils";
import useQueryGetCreators from "@/hooks/queries/studio/useQueryGetCreators";
import { useSearchParams } from "next/navigation";
import { useCallback, useMemo, useState } from "react";

function useSearchAndSortedCreators() {
	const searchParams = useSearchParams();
	const { getSortByFromURL, getFilteredCategoriesFromURL, getCreatorsParamsFromURL } = useCreatorsSearchParams();

	const [params, setParams] = useState<GetCreatorsRequest>(getCreatorsParamsFromURL());
	const { data: { data: creatorsResponse } = {}, isLoading, refetch } = useQueryGetCreators({ req: params });

	const [sortType, setSortType] = useState<SortByType>((searchParams.get("sortBy") ?? "popularity") as SortByType);

	const sortedCreators = useMemo(() => {
		if (!creatorsResponse?.content) return [];

		const creators = [...creatorsResponse.content];

		switch (sortType) {
			case "popularity":
				return sortByPopularity(creators);
			case "association":
				const selectedCategories = getFilteredCategoriesFromURL();

				return sortByAssociation(creators, selectedCategories);
			case "fastest":
				return sortByFastest(creators);
			default:
				return creators;
		}
	}, [creatorsResponse, sortType]);

	const handleSearchCreators = useCallback(
		async (newParams: GetCreatorsRequest) => {
			const currentSortType = getSortByFromURL();
			setParams(newParams);
			await refetch().then(() => setSortType(currentSortType));
		},
		[refetch],
	);

	return { sortedCreators, handleSearchCreators, isLoading, sortType, setSortType };
}

export default useSearchAndSortedCreators;
