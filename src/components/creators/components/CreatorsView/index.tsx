"use client";

import { StudioProfile } from "@/apis/studio";
import CreatorCard from "@/components/common/CreatorCard";
import AppliedFilterChip from "@/components/creators/components/CreatorsView/components/AppliedFilterChip";
import SearchFilter from "@/components/creators/components/CreatorsView/components/CreatorsFilter";
import Header from "@/components/creators/components/CreatorsView/components/Header";
import SortSection from "@/components/creators/components/CreatorsView/components/SortSection";
import { useCreatorsContext } from "@/components/creators/provider/CreatorsProvider";
import { InstatoonCategoryType } from "@/defines/instatoon-category/types";
import { Box, MenuItem, Select } from "@mui/material";

type Props = {};

function CreatorsView({}: Props) {
	const { creatorsResponse, isLoading } = useCreatorsContext();

	return (
		<Box display="flex" gap="3rem" flexDirection="column">
			<Header />
			<Box display="flex" gap="1rem" flexDirection="column">
				<Box display="flex" justifyContent="space-between" alignItems="center">
					<SearchFilter />

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

				<Box
					sx={{
						display: "flex",
						flexWrap: "wrap",
						gap: "1rem",
					}}
				>
					{isLoading ? (
						<Box>Loading...</Box>
					) : (
						creatorsResponse?.content?.map((creator) => {
							const { name, categories, description, id, instagramUsername } = creator;
							const profile: Omit<StudioProfile, "portfolios"> = {
								name,
								description,
								categories: categories.map((category) => category as InstatoonCategoryType),
								profileImageUrl: "",
							};

							return (
								<CreatorCard
									key={id}
									profile={profile}
									instagramUsername={instagramUsername}
									buttonEvent={{ detail: {}, project: {} }}
								/>
							);
						})
					)}
				</Box>
			</Box>
		</Box>
	);
}

export default CreatorsView;
