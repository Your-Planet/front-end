import { STUDIO_FORM_WIDTH } from "@/components/mypage/studio/defines/constants";
import { Box, Skeleton } from "@mui/material";

export interface StudioProfileLoadingViewProps {}

function TextFieldSkeleton() {
	return <Skeleton variant="rounded" width="100%" height={40} />;
}

function TextFieldLineSkeleton() {
	return <Skeleton variant="rounded" width="100%" height={140} />;
}

function LabelSkeleton() {
	return <Skeleton variant="text" sx={{ fontSize: 16 }} width={180} />;
}

function StudioProfileFormLoading(props: StudioProfileLoadingViewProps) {
	const {} = props;

	return (
		<Box
			sx={{
				width: `${STUDIO_FORM_WIDTH}px`,
				display: "flex",
				flexDirection: "column",
				gap: "16px",
				padding: "24px",
			}}
		>
			<Skeleton variant="text" sx={{ fontSize: 28 }} width={200} />
			<TextFieldSkeleton />
			<TextFieldSkeleton />
			<TextFieldLineSkeleton />
			<LabelSkeleton />
			<Box
				sx={{
					display: "flex",
					gap: "12px",
				}}
			>
				{Array.from({ length: 4 }).map((_, i) => (
					<Skeleton
						key={i}
						variant="rounded"
						sx={{
							flex: "auto",
						}}
						height={120}
					/>
				))}
			</Box>
			<LabelSkeleton />
			<TextFieldSkeleton />
		</Box>
	);
}

export default StudioProfileFormLoading;
