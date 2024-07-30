import { CreatorCardFieldProps } from "@/components/common/CreatorCard";
import { useCreatorCardLoadingContext } from "@/components/common/CreatorCard/providers/CreatorCardLoadingProvider";
import EllipsisBox from "@/components/common/EllipsisBox";
import { Skeleton } from "@mui/material";
import { grey } from "@mui/material/colors";

type CreatorCardDescriptionFieldProps = CreatorCardFieldProps<string>;

function CreatorCardDescriptionField(props: CreatorCardDescriptionFieldProps) {
	const { value } = props;

	const isLoading = useCreatorCardLoadingContext();

	return (
		<EllipsisBox
			sx={{
				whiteSpace: "pre-wrap",
				fontSize: "16px",
				color: grey[700],
				lineHeight: 1.4,
				wordWrap: "break-word",
				height: "160px",
			}}
			line={7}
		>
			{isLoading ? (
				<>
					<Skeleton variant="text" sx={{ fontSize: 16 }} width={420} />
					<Skeleton variant="text" sx={{ fontSize: 16 }} width={360} />
					<Skeleton variant="text" sx={{ fontSize: 16 }} width={390} />
					<Skeleton variant="text" sx={{ fontSize: 16 }} width={340} />
					<Skeleton variant="text" sx={{ fontSize: 16 }} width={350} />
					<Skeleton variant="text" sx={{ fontSize: 16 }} width={380} />
					<Skeleton variant="text" sx={{ fontSize: 16 }} width={310} />
				</>
			) : (
				value
			)}
		</EllipsisBox>
	);
}

export default CreatorCardDescriptionField;
