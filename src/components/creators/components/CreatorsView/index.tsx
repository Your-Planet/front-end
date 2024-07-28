"use client";

import AppliedFilterChip from "@/components/creators/components/CreatorsView/components/AppliedFilterChip";
import Header from "@/components/creators/components/CreatorsView/components/Header";
import SearchFilter from "@/components/creators/components/CreatorsView/components/SearchFilter";
import SortSection from "@/components/creators/components/CreatorsView/components/SortSection";
import useLoadCreators from "@/components/creators/hooks/useLoadCreators";
import { Box, MenuItem, Select } from "@mui/material";

type Props = {};

function CreatorsView({}: Props) {
	const { creatorsData, handleClickSearch, isLoading } = useLoadCreators();

	return (
		<Box display="flex" gap="3rem" flexDirection="column">
			<Header />
			<Box display="flex" gap="1rem" flexDirection="column">
				<Box display="flex" justifyContent="space-between" alignItems="center">
					<SearchFilter handleClickSearch={handleClickSearch} />

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

				<Box>
					{isLoading ? (
						<Box>Loading...</Box>
					) : (
						creatorsData?.content?.map((res) => (
							<Box key={res.id}>
								<Box>{res.categories}</Box>
								<Box>{res.description}</Box>
								<Box>{res.id}</Box>
								<Box>{res.instagramUsername}</Box>
								<Box>{res.name}</Box>
							</Box>
						))
					)}
				</Box>
			</Box>
		</Box>
	);
}

export default CreatorsView;
