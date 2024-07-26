import CreatorIntroductionCategories from "@/components/creators/CreatorsDetailView/components/CreatorIntroductionSection/components/CreatorIntroductionCategories";
import CreatorIntroductionDescription from "@/components/creators/CreatorsDetailView/components/CreatorIntroductionSection/components/CreatorIntroductionDescription";
import CreatorIntroductionInstagramUsername from "@/components/creators/CreatorsDetailView/components/CreatorIntroductionSection/components/CreatorIntroductionInstagramUsername";
import CreatorIntroductionName from "@/components/creators/CreatorsDetailView/components/CreatorIntroductionSection/components/CreatorIntroductionName";
import CreatorIntroductionProfileImage from "@/components/creators/CreatorsDetailView/components/CreatorIntroductionSection/components/CreatorIntroductionProfileImage";
import RequestProjectButton from "@/components/creators/CreatorsDetailView/components/CreatorIntroductionSection/components/RequestProjectButton";
import { Box, styled } from "@mui/material";

const StyledSection = styled("section")`
	display: flex;
	gap: 48px;
	align-items: center;
`;

function CreatorIntroductionSection() {
	return (
		<StyledSection>
			<CreatorIntroductionProfileImage />

			<Box
				sx={{
					width: "480px",
				}}
			>
				<CreatorIntroductionName />
				<CreatorIntroductionInstagramUsername />
				<CreatorIntroductionCategories />
				<CreatorIntroductionDescription />
				<RequestProjectButton />
			</Box>
		</StyledSection>
	);
}

export default CreatorIntroductionSection;
