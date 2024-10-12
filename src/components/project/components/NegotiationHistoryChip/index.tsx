import { Chip, ChipOwnProps } from "@mui/material";

interface NegotiationChipProps extends ChipOwnProps {}

function NegotiationHistoryChip(props: NegotiationChipProps) {
	const { disabled = false, color, label } = props;

	return (
		<Chip label={label} disabled={disabled} color={color} size="small" sx={{ fontWeight: "bold", width: "70px" }} />
	);
}

export default NegotiationHistoryChip;
