"use client";

import { StudioProfile } from "@/apis/studio";
import CreatorCard from "@/components/common/CreatorCard";
import ProfileImage from "@/components/common/profile-image/ProfileImage";
import AppliedFilterChip from "@/components/creators/components/CreatorsView/components/AppliedFilterChip";
import CreatorsFilter from "@/components/creators/components/CreatorsView/components/CreatorsFilter";
import Header from "@/components/creators/components/CreatorsView/components/Header";
import SortDropdown from "@/components/creators/components/CreatorsView/components/SortDropdown";
import useSearchAndSortedCreators from "@/components/creators/hooks/useSearchAndSortedCreators";
import { InstatoonCategoryType } from "@/defines/instatoon-category/types";
import { Box, MenuItem, Select } from "@mui/material";
import { useRouter } from "next/navigation";

type Props = {};

function CreatorsView({}: Props) {
	const { sortedCreators, isLoading, handleSearchCreators, setSortType } = useSearchAndSortedCreators();
	const router = useRouter();

	return (
		<Box display="flex" gap="3rem" flexDirection="column">
			<Header />
			<Box display="flex" gap="1rem" flexDirection="column">
				<Box display="flex" justifyContent="space-between" alignItems="center">
					<CreatorsFilter handleSearchCreators={handleSearchCreators} />

					<Box display="flex" gap="1rem">
						{/* TODO: @나은찬 컴포넌트화 */}
						<Select size="small" value="dummy">
							<MenuItem value="dummy">20</MenuItem>
							<MenuItem value="dummy2">40</MenuItem>
							<MenuItem value="dummy3">80</MenuItem>
							<MenuItem value="dummy4">100</MenuItem>
						</Select>
						<SortDropdown setSortType={setSortType} />
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
						sortedCreators?.map((creator) => {
							const { name, categories, description, id, instagramUsername, profileImageUrl } = creator;
							const profile: Omit<StudioProfile, "portfolios"> = {
								name,
								description,
								profileImageUrl,
								categories: categories.map((category) => category as InstatoonCategoryType),
							};

							const renderProfileImage = (profileImageUrl: string) => <ProfileImage src={profileImageUrl} />;

							return (
								<CreatorCard
									key={id}
									profile={profile}
									renderProfileImage={renderProfileImage}
									instagramUsername={instagramUsername}
									buttonEvent={{
										detail: {
											tooltip: "자세히 보기",
											onClick: () => router.push(`/creators/${id}`),
										},
										project: {
											tooltip: "프로젝트 의뢰하기",
											onClick: () => router.push(`/creators/${id}/request`),
										},
									}}
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
