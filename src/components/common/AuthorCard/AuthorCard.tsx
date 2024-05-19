import { StudioProfile } from "@/apis/studio";
import { AUTHOR_CARD_WIDTH } from "@/components/common/AuthorCard/defines";
import { INSTATOON_CATEGORY_NAME_BY_TYPE } from "@/defines/instatoon-category/constants";
import { Box, Button, Chip, Stack, Tooltip } from "@mui/material";
import { blue, grey } from "@mui/material/colors";
import { MouseEventHandler } from "react";

type AuthorCardButtonEvent = {
	onClick?: MouseEventHandler<HTMLButtonElement>;
	tooltip?: string;
};

interface AuthorCardProps {
	profile: StudioProfile;
	instagramUserName: string;
	buttonEvent: {
		project: AuthorCardButtonEvent;
		detail: AuthorCardButtonEvent;
	};
}

function AuthorCard(props: AuthorCardProps) {
	const {
		profile: { name, description, categories },
		instagramUserName,
		buttonEvent,
	} = props;

	return (
		<Stack
			spacing={3}
			sx={{
				borderRadius: "6px",
				border: `1px solid ${grey[300]}`,
				padding: "24px",
				boxShadow: `4px 4px 10px ${grey[200]}`,
				width: `${AUTHOR_CARD_WIDTH}px`,
				height: "fit-content",
			}}
		>
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					gap: 2,
				}}
			>
				<Box sx={{ width: "80px", height: "80px" }}>{/*TODO @김현규 인스타그램 프로필 사진*/}</Box>

				<Box>
					<Box
						sx={{
							fontSize: "18px",
							fontWeight: "bold",
							color: grey[900],
							lineHeight: 1.4,
						}}
					>
						{name}
					</Box>

					<Box
						sx={{
							fontSize: "12px",
							color: blue[500],
							lineHeight: "200%",
						}}
					>
						@{instagramUserName}
					</Box>
				</Box>
			</Box>

			<Box
				sx={{
					whiteSpace: "pre-wrap",
					fontSize: "16px",
					color: grey[700],
					lineHeight: 1.2,
					wordWrap: "break-word",
				}}
			>
				{description}
			</Box>

			<Stack direction="row" spacing={1}>
				{categories.map((category) => (
					<Chip label={INSTATOON_CATEGORY_NAME_BY_TYPE[category]} color="primary" size="small" />
				))}
			</Stack>

			<Stack spacing={1}>
				<Tooltip title={buttonEvent.detail.tooltip} placement="top">
					<Button fullWidth variant="outlined" onClick={buttonEvent.detail.onClick}>
						자세히 보기
					</Button>
				</Tooltip>

				<Tooltip title={buttonEvent.project.tooltip} placement="bottom">
					<Button fullWidth variant="contained" onClick={buttonEvent.project.onClick}>
						프로젝트 의뢰하기
					</Button>
				</Tooltip>
			</Stack>
		</Stack>
	);
}

export default AuthorCard;
