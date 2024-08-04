"use client";

import BudgetFilter from "@/components/creators/components/CreatorsView/components/CreatorsFilter/components/BudgetFilter";
import CategoryFilter from "@/components/creators/components/CreatorsView/components/CreatorsFilter/components/CategoryFilter";
import SearchInput from "@/components/creators/components/CreatorsView/components/CreatorsFilter/components/SearchInput";
import { Box, Button } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";

type Props = {};

function SearchAuthorFilter({}: Props) {
	const router = useRouter();
	const pathname = usePathname();

	const handleClickResetButton = () => {
		router.push(`${pathname}`, { scroll: false });
	};

	return (
		<Box display="flex" gap="1rem" height="auto" alignItems="center">
			<CategoryFilter />

			<BudgetFilter />

			<SearchInput />

			<Button variant="outlined" onClick={handleClickResetButton}>
				초기화
			</Button>
		</Box>
	);
}

export default SearchAuthorFilter;
