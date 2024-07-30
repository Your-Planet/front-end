"use client";

import BudgetFilter from "@/components/search/components/SearchCreatorView/components/SearchCreatorFilter/components/BudgetFilter";
import CategoryFilter from "@/components/search/components/SearchCreatorView/components/SearchCreatorFilter/components/CategoryFilter";
import SearchInput from "@/components/search/components/SearchCreatorView/components/SearchCreatorFilter/components/SearchInput";
import { Box, Button } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";

function SearchCreatorFilter(props: {}) {
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

export default SearchCreatorFilter;
