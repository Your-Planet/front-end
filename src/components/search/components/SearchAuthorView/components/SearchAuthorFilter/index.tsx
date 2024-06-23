import BudgetFilter from "@/components/search/components/SearchAuthorView/components/SearchAuthorFilter/components/BudgetFilter";
import CategoryFilter from "@/components/search/components/SearchAuthorView/components/SearchAuthorFilter/components/CategoryFilter";
import { Search } from "@mui/icons-material";
import { Box, Button, InputAdornment, MenuItem, Select, TextField } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";

function SearchAuthorFilter(props: {}) {
	const router = useRouter();
	const pathname = usePathname();

	const handleClickResetButton = () => {
		router.push(`${pathname}`, { scroll: false });
	};

	return (
		<Box display="flex" gap="1rem" height="auto" alignItems="center">
			<CategoryFilter />

			<BudgetFilter />

			<Box>
				<Select size="small" value="dummy">
					<MenuItem value="dummy">인스타툰 이름</MenuItem>
					<MenuItem value="dummy2">인스타그램 계정</MenuItem>
					<MenuItem value="dummy3">인스타툰 소개</MenuItem>
				</Select>

				<TextField
					size="small"
					placeholder="검색어를 입력해 주세요."
					InputProps={{
						endAdornment: (
							<InputAdornment position="end">
								<Search />
							</InputAdornment>
						),
					}}
				/>
			</Box>

			<Button variant="outlined" onClick={handleClickResetButton}>
				초기화
			</Button>
		</Box>
	);
}

export default SearchAuthorFilter;
