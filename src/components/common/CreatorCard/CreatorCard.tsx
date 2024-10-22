import { StudioProfile } from "@/apis/studio";
import CreatorCardCategoriesField from "@/components/common/CreatorCard/components/CreatorCardCategoriesField";
import CreatorCardDescriptionField from "@/components/common/CreatorCard/components/CreatorCardDescriptionField";
import CreatorCardDetailButton from "@/components/common/CreatorCard/components/CreatorCardDetailButton";
import CreatorCardInstagramUsernameField from "@/components/common/CreatorCard/components/CreatorCardInstagramUsernameField";
import CreatorCardNameField from "@/components/common/CreatorCard/components/CreatorCardNameField";
import CreatorCardProfileImageField from "@/components/common/CreatorCard/components/CreatorCardProfileImageField";
import CreatorCardProjectButton from "@/components/common/CreatorCard/components/CreatorCardProjectButton";
import { CREATOR_CARD_WIDTH, CreatorCardButtonEvent } from "@/components/common/CreatorCard/defines";
import { CreatorCardLoadingProvider } from "@/components/common/CreatorCard/providers/CreatorCardLoadingProvider";
import { Box, Stack } from "@mui/material";
import { grey } from "@mui/material/colors";
import { ReactNode } from "react";

interface CreatorCardProps {
	profile: Omit<StudioProfile, "portfolios">;
	instagramUsername: string;
	renderProfileImage?: (imageUrl: string) => ReactNode;
	buttonEvent: {
		project: CreatorCardButtonEvent;
		detail: CreatorCardButtonEvent;
	};
	isLoading?: boolean;
}

function CreatorCard(props: CreatorCardProps) {
	const {
		profile: { name, description, categories, profileImageUrl },
		instagramUsername,
		renderProfileImage,
		buttonEvent,
		isLoading = false,
	} = props;

	return (
		<CreatorCardLoadingProvider isLoading={isLoading}>
			<Stack
				spacing={3}
				sx={{
					borderRadius: "6px",
					border: `1px solid ${grey[300]}`,
					boxShadow: `4px 4px 10px ${grey[200]}`,
					padding: "24px",
					width: `${CREATOR_CARD_WIDTH}px`,
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
					<CreatorCardProfileImageField value={renderProfileImage?.(profileImageUrl)} />
					<Box>
						<CreatorCardNameField value={name} />
						<CreatorCardInstagramUsernameField value={`@${instagramUsername}`} />
					</Box>
				</Box>

				<CreatorCardDescriptionField value={description} />
				<CreatorCardCategoriesField value={categories} />

				<Stack spacing={1}>
					<CreatorCardDetailButton value={buttonEvent.detail} />
					<CreatorCardProjectButton value={buttonEvent.project} />
				</Stack>
			</Stack>
		</CreatorCardLoadingProvider>
	);
}

export default CreatorCard;
