"use client";

import { GetCreatorsResponse } from "@/apis/studio/models/creators";
import { KeywordType } from "@/components/creators/components/CreatorsView/components/SearchFilter/defines/type";
import useQueryGetCreators from "@/hooks/queries/studio/useQueryGetCreators";
import { useSearchParams } from "next/navigation";

export interface UseLoadCreators {
	creatorsData?: GetCreatorsResponse;
	handleClickSearch: () => Promise<void>;
	isLoading: boolean;
}

export default function useLoadCreators(): UseLoadCreators {
	const searchParams = useSearchParams();
	const categories = searchParams.get("categories");
	const keywordType = searchParams.get("keywordType") as KeywordType;
	const keyword = searchParams.get("keyword");
	const minPrice = parseInt(searchParams.get("min") ?? "-1", 10);
	const maxPrice = parseInt(searchParams.get("max") ?? "-1", 10);

	const {
		data: { data: creators } = {},
		isLoading,
		refetch,
	} = useQueryGetCreators({
		req: {
			...(categories && { categories }),
			...(keywordType && { keywordType }),
			...(keyword && { keyword }),
			...(minPrice !== -1 && { minPrice }),
			...(maxPrice !== -1 && { maxPrice }),
		},
	});

	const handleClickSearch = async () => {
		await refetch();
	};

	return {
		creatorsData: creators,
		handleClickSearch,
		isLoading,
	};
}
