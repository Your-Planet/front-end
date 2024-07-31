"use client";

import AppliedFilterChip from "@/components/creators/components/CreatorsView/components/AppliedFilterChip";
import CreatorsFilter from "@/components/creators/components/CreatorsView/components/CreatorsFilter";
import Header from "@/components/creators/components/CreatorsView/components/Header";
import SortSection from "@/components/creators/components/CreatorsView/components/SortSection";
import { Box, MenuItem, Select } from "@mui/material";

type Props = {};

function CreatorsView({}: Props) {
	return (
		<Box display="flex" gap="3rem" flexDirection="column">
			<Header />
			<Box display="flex" gap="1rem" flexDirection="column">
				<Box display="flex" justifyContent="space-between" alignItems="center">
					<CreatorsFilter />

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

export default CreatorsView;
