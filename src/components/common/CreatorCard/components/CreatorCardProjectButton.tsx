import { CreatorCardButtonEvent, CreatorCardFieldProps } from "@/components/common/CreatorCard";
import { useCreatorCardLoadingContext } from "@/components/common/CreatorCard/providers/CreatorCardLoadingProvider";
import { Button, Skeleton, Tooltip } from "@mui/material";

type CreatorCardProjectButtonProps = CreatorCardFieldProps<CreatorCardButtonEvent>;

function CreatorCardProjectButton(props: CreatorCardProjectButtonProps) {
	const {
		value: { tooltip, onClick },
	} = props;

	const isLoading = useCreatorCardLoadingContext();

	return isLoading ? (
		<Skeleton variant="rounded" height={"36.5px"} />
	) : (
		<Tooltip title={tooltip} placement="bottom">
			<Button fullWidth variant="contained" onClick={onClick}>
				프로젝트 의뢰하기
			</Button>
		</Tooltip>
	);
}

export default CreatorCardProjectButton;
