import { CreatorCardButtonEvent, CreatorCardFieldProps } from "@/components/common/CreatorCard";
import { useCreatorCardLoadingContext } from "@/components/common/CreatorCard/providers/CreatorCardLoadingProvider";
import { Button, Skeleton, Tooltip } from "@mui/material";

type CreatorCardDetailButtonProps = CreatorCardFieldProps<CreatorCardButtonEvent>;

function CreatorCardDetailButton(props: CreatorCardDetailButtonProps) {
	const {
		value: { tooltip, onClick },
	} = props;

	const isLoading = useCreatorCardLoadingContext();

	return isLoading ? (
		<Skeleton variant="rounded" height={"36.5px"} />
	) : (
		<Tooltip title={tooltip} placement="top">
			<Button fullWidth variant="outlined" onClick={onClick}>
				자세히 보기
			</Button>
		</Tooltip>
	);
}

export default CreatorCardDetailButton;
