"use client";

import { GetCreatorsRequest } from "@/apis/studio";
import BudgetFilter from "@/components/creators/components/CreatorsView/components/CreatorsFilter/components/BudgetFilter";
import CategoryFilter from "@/components/creators/components/CreatorsView/components/CreatorsFilter/components/CategoryFilter";
import SearchInput from "@/components/creators/components/CreatorsView/components/CreatorsFilter/components/SearchInput";
import { useCreatorsSearchParams } from "@/components/creators/hooks/useCreatorsSearchParams";
import { Box, Button } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";

export type SearchCreatorsProps = {
	handleSearchCreators: (newParams: GetCreatorsRequest) => Promise<void>;
};

function CreatorsFilter(props: SearchCreatorsProps) {
	const { handleSearchCreators } = props;
	const { getCreatorsParamsFromURL } = useCreatorsSearchParams();
	const router = useRouter();
	const pathname = usePathname();

	const handleClickSearchButton = () => {
		handleSearchCreators(getCreatorsParamsFromURL());
	};

	const handleClickResetButton = () => {
		router.push(`${pathname}`, { scroll: false });
	};

	return (
		<Box display="flex" gap="1rem" height="auto" alignItems="center">
			<CategoryFilter />

			<BudgetFilter />

			<SearchInput handleSearchCreators={handleSearchCreators} />

			<Button variant="contained" onClick={handleClickSearchButton}>
				검색
			</Button>

			<Button variant="outlined" onClick={handleClickResetButton}>
				초기화
			</Button>
		</Box>
	);
}

export default CreatorsFilter;
