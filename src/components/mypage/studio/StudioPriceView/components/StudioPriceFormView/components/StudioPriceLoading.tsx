import { Box, Skeleton } from "@mui/material";

export interface StudioPriceLoadingViewProps {}

function LabelSkeleton() {
	return <Skeleton variant="text" sx={{ fontSize: 24 }} width={180} />;
}

function TextFieldSkeleton() {
	return <Skeleton variant="rounded" width="100%" height={56} />;
}

function TextFieldRadioSkeleton() {
	return <Skeleton variant="rounded" width="100%" height={65} />;
}

function StudioPriceLoading(props: StudioPriceLoadingViewProps) {
	const {} = props;

	return (
		<>
			<Box
				sx={{
					width: "520px",
					display: "flex",
					flexDirection: "column",
					gap: "16px",
				}}
			>
				<Skeleton variant="text" sx={{ fontSize: 28 }} width={200} />
				<LabelSkeleton />
				<TextFieldSkeleton />
				<TextFieldSkeleton />
				<TextFieldSkeleton />
				<TextFieldSkeleton />
				<TextFieldSkeleton />

				<LabelSkeleton />
				<Box>
					<TextFieldRadioSkeleton />
					<TextFieldSkeleton />
				</Box>
				<Box>
					<TextFieldRadioSkeleton />
					<TextFieldSkeleton />
				</Box>
				<Box>
					<TextFieldRadioSkeleton />
					<TextFieldSkeleton />
				</Box>
				<Box>
					<TextFieldRadioSkeleton />
					<TextFieldSkeleton />
				</Box>
			</Box>
		</>
	);
}

export default StudioPriceLoading;
