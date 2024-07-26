"use client";

import AppliedFilterChip from "@/components/creators/components/SearchCreatorsView/components/AppliedFilterChip";
import Header from "@/components/creators/components/SearchCreatorsView/components/Header";
import SearchCreatorFilter from "@/components/creators/components/SearchCreatorsView/components/SearchCreatorsFilter";
import SortSection from "@/components/creators/components/SearchCreatorsView/components/SortSection";
import { Box, MenuItem, Select } from "@mui/material";

type Props = {};

function SearchCreatorView({}: Props) {
	return (
		<Box display="flex" gap="3rem" flexDirection="column">
			<Header />
			<Box display="flex" gap="1rem" flexDirection="column">
				<Box display="flex" justifyContent="space-between" alignItems="center">
					<SearchCreatorFilter />

					<Box display="flex" gap="1rem">
						{/* TODO: @나은찬 컴포넌트화 */}
						<Select size="small" value="dummy">
							<MenuItem value="dummy">20</MenuItem>
							<MenuItem value="dummy2">40</MenuItem>
							<MenuItem value="dummy3">80</MenuItem>
							<MenuItem value="dummy4">100</MenuItem>
						</Select>
						<SortSection />
					</Box>
				</Box>
				<AppliedFilterChip />
			</Box>
		</Box>
	);
}

export default SearchCreatorView;
