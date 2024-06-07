import CategoryFilter from "@/components/search/components/SearchAuthorView/components/SearchAuthorFilter/components/CategoryFilter";
import useFilter from "@/components/search/hooks/useFilter";
import { Search } from "@mui/icons-material";
import { Box, Button, InputAdornment, MenuItem, Select, TextField } from "@mui/material";

function SearchAuthorFilter(props: {}) {
	const {
		selectedCategories,
		splitCategoriesFromSearchParams,
		handleChangeCategories,
		handleClickSearchButton,
		handleClickResetButton,
	} = useFilter();

	return (
		<Box display="flex" gap="1rem" height="auto" alignItems="center">
			<CategoryFilter
				selectedCategories={selectedCategories}
				splitCategoriesFromSearchParams={splitCategoriesFromSearchParams}
				onChangeCategories={handleChangeCategories}
			/>

			<Select size="small" label="예산" value="dummy">
				<MenuItem value="dummy">예산</MenuItem>
			</Select>

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

			<Button variant="contained" onClick={handleClickSearchButton}>
				검색
			</Button>
			<Button variant="outlined" onClick={handleClickResetButton}>
				초기화
			</Button>
		</Box>
	);
}

export default SearchAuthorFilter;
