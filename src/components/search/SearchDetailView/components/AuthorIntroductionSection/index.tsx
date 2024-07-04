import AuthorIntroductionCategories from "@/components/search/SearchDetailView/components/AuthorIntroductionSection/components/AuthorIntroductionCategories";
import AuthorIntroductionDescription from "@/components/search/SearchDetailView/components/AuthorIntroductionSection/components/AuthorIntroductionDescription";
import AuthorIntroductionInstagramUsername from "@/components/search/SearchDetailView/components/AuthorIntroductionSection/components/AuthorIntroductionInstagramUsername";
import AuthorIntroductionName from "@/components/search/SearchDetailView/components/AuthorIntroductionSection/components/AuthorIntroductionName";
import AuthorIntroductionProfileImage from "@/components/search/SearchDetailView/components/AuthorIntroductionSection/components/AuthorIntroductionProfileImage";
import RequestProjectButton from "@/components/search/SearchDetailView/components/AuthorIntroductionSection/components/RequestProjectButton";
import { Box, styled } from "@mui/material";

const StyledSection = styled("section")`
	display: flex;
	gap: 48px;
	align-items: center;
`;

function AuthorIntroductionSection() {
	return (
		<StyledSection>
			<AuthorIntroductionProfileImage />

			<Box
				sx={{
					width: "480px",
				}}
			>
				<AuthorIntroductionName />
				<AuthorIntroductionInstagramUsername />
				<AuthorIntroductionCategories />
				<AuthorIntroductionDescription />
				<RequestProjectButton />
			</Box>
		</StyledSection>
	);
}

export default AuthorIntroductionSection;
