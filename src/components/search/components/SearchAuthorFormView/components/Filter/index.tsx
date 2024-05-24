import Category from "@/components/search/components/SearchAuthorFormView/components/Filter/components/Category";
import { Search } from "@mui/icons-material";
import { Box, Button, InputAdornment, MenuItem, Select, TextField } from "@mui/material";

type Props = {};

function Filter({}: Props) {
	const handleClickResetButton = () => {
		console.log("초기화");
	};

	return (
		<Box display="flex" gap="1rem" height="auto" alignItems="center">
			<Category />

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

			<Button variant="outlined" onClick={handleClickResetButton}>
				초기화
			</Button>
		</Box>
	);
}

export default Filter;
