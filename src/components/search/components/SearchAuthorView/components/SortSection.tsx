import { Box, MenuItem, Select } from "@mui/material";

type Props = {};

function SortSection({}: Props) {
	return (
		<Box display="flex" gap="1rem">
			<Select size="small" value="dummy">
				<MenuItem value="dummy">20</MenuItem>
				<MenuItem value="dummy2">40</MenuItem>
				<MenuItem value="dummy3">80</MenuItem>
				<MenuItem value="dummy4">100</MenuItem>
			</Select>

			<Select size="small" value="dummy">
				<MenuItem value="dummy">인기순</MenuItem>
				<MenuItem value="dummy2">연과도순</MenuItem>
				<MenuItem value="dummy3">팔로워순</MenuItem>
				<MenuItem value="dummy4">작업 빠른 순</MenuItem>
			</Select>
		</Box>
	);
}

export default SortSection;
