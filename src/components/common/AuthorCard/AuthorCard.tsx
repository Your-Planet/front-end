import { StudioProfile } from "@/apis/studio";
import AuthorCardCategoriesField from "@/components/common/AuthorCard/components/AuthorCardCategoriesField";
import AuthorCardDescriptionField from "@/components/common/AuthorCard/components/AuthorCardDescriptionField";
import AuthorCardDetailButton from "@/components/common/AuthorCard/components/AuthorCardDetailButton";
import AuthorCardInstagramUsernameField from "@/components/common/AuthorCard/components/AuthorCardInstagramUsernameField";
import AuthorCardNameField from "@/components/common/AuthorCard/components/AuthorCardNameField";
import AuthorCardProfileImageField from "@/components/common/AuthorCard/components/AuthorCardProfileImageField";
import AuthorCardProjectButton from "@/components/common/AuthorCard/components/AuthorCardProjectButton";
import { AUTHOR_CARD_WIDTH, AuthorCardButtonEvent } from "@/components/common/AuthorCard/defines";
import { AuthorCardLoadingProvider } from "@/components/common/AuthorCard/providers/AuthorCardLoadingProvider";
import { Box, Stack } from "@mui/material";
import { grey } from "@mui/material/colors";

interface AuthorCardProps {
	profile: Omit<StudioProfile, "portfolios">;
	instagramUsername: string;
	buttonEvent: {
		project: AuthorCardButtonEvent;
		detail: AuthorCardButtonEvent;
	};
	isLoading?: boolean;
}

function AuthorCard(props: AuthorCardProps) {
	const {
		profile: { name, description, categories },
		instagramUsername,
		buttonEvent,
		isLoading = false,
	} = props;

	return (
		<AuthorCardLoadingProvider isLoading={isLoading}>
			<Stack
				spacing={3}
				sx={{
					borderRadius: "6px",
					border: `1px solid ${grey[300]}`,
					boxShadow: `4px 4px 10px ${grey[200]}`,
					padding: "24px",
					width: `${AUTHOR_CARD_WIDTH}px`,
					height: "fit-content",
				}}
			>
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						gap: 2,
						height: "fit-content",
					}}
				>
					{/*TODO @김현규 프로필 사진*/}
					<AuthorCardProfileImageField value={""} />
					<Box>
						<AuthorCardNameField value={name} />
						<AuthorCardInstagramUsernameField value={`@${instagramUsername}`} />
					</Box>
				</Box>

				<AuthorCardDescriptionField value={description} />
				<AuthorCardCategoriesField value={categories} />

				<Stack spacing={1}>
					<AuthorCardDetailButton value={buttonEvent.detail} />
					<AuthorCardProjectButton value={buttonEvent.project} />
				</Stack>
			</Stack>
		</AuthorCardLoadingProvider>
	);
}

export default AuthorCard;
