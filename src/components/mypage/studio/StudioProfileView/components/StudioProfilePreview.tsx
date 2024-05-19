import { AuthorDetailResponse } from "@/apis/member";
import { STUDIO_PROFILE_FORM_LENGTH } from "@/components/mypage/studio/StudioProfileView/defines/constants";
import { StudioProfileForm } from "@/components/mypage/studio/StudioProfileView/defines/types";
import {
	STUDIO_FORM_WIDTH,
	STUDIO_PROFILE_GAP,
	STUDIO_PROFILE_PREVIEW_WIDTH,
} from "@/components/mypage/studio/defines/constants";
import useQueryGetDetail from "@/hooks/queries/member/useQueryGetDetail";
import { Box, Button, Grid, Tooltip } from "@mui/material";
import { grey } from "@mui/material/colors";
import { ReactElement } from "react";
import { useFormContext } from "react-hook-form";

function GuideTooltip({ children }: { children: ReactElement }) {
	return (
		<Tooltip title={"미리보기에서는 지원하지 않는 기능입니다."} placement={"bottom"}>
			{children}
		</Tooltip>
	);
}

function StudioProfilePreview() {
	const { watch } = useFormContext<StudioProfileForm>();

	const { name, description } = watch();

	const { data: { data } = {} } = useQueryGetDetail({
		req: undefined,
		queryOption: {
			refetchOnWindowFocus: false,
		},
	});

	const memberInfo = data as AuthorDetailResponse;

	return (
		<>
			<Box
				sx={{
					borderRadius: "6px",
					border: `1px solid ${grey[300]}`,
					padding: "24px",
					boxShadow: `4px 4px 10px ${grey[200]}`,
					width: `${STUDIO_PROFILE_PREVIEW_WIDTH}px`,
					height: "fit-content",

					[`@media (max-width: ${STUDIO_FORM_WIDTH + STUDIO_PROFILE_PREVIEW_WIDTH + STUDIO_PROFILE_GAP}px)`]: {
						display: "none",
					},
				}}
			>
				<Grid container spacing={2}>
					<Grid item xs={8}>
						<Grid container spacing={2}>
							<Grid
								item
								sx={{
									fontSize: "18px",
									fontWeight: "bold",
									color: grey[900],
									maxWidth: "200px",
									lineHeight: 1.4,
								}}
							>
								{name.substring(0, STUDIO_PROFILE_FORM_LENGTH.name.max)}
							</Grid>
							<Grid
								item
								sx={{
									fontSize: "12px",
									color: grey[500],
									lineHeight: "200%",
								}}
							>
								{memberInfo?.instagramUsername}
							</Grid>
						</Grid>
						<Box
							sx={{
								whiteSpace: "pre-wrap",
								marginTop: 2,
								fontSize: "16px",
								color: grey[700],
								lineHeight: 1.2,
								wordWrap: "break-word",
							}}
						>
							{description.substring(0, STUDIO_PROFILE_FORM_LENGTH.description.max)}
						</Box>
					</Grid>
					<Grid item xs={4}>
						{/*TODO @김현규 인스타그램 프로필 사진*/}
					</Grid>
				</Grid>

				<Grid container spacing={2} marginTop={4}>
					<Grid item xs={6}>
						<GuideTooltip>
							<Button fullWidth variant="contained">
								프로젝트 의뢰하기
							</Button>
						</GuideTooltip>
					</Grid>

					<Grid item xs={6}>
						<GuideTooltip>
							<Button fullWidth variant="outlined">
								자세히 보기
							</Button>
						</GuideTooltip>
					</Grid>
				</Grid>
			</Box>
		</>
	);
}

export default StudioProfilePreview;
