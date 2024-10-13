import NegotiationHistoryTab from "@/components/project/components/NegotiationHistoryStepBar/NegotiationHistoryStepBars";
import ProjectStatusChip from "@/components/project/components/ProjectStatusChip";
import { Box } from "@mui/material";

function ProjectDetailsView() {
	return (
		<Box>
			{/* TODO: @나은찬 pass the prop */}
			<NegotiationHistoryTab currentNegotiationProgress="IN_NEGOTIATION" />
			<ProjectStatusChip currentStatus="NEED_REPLY" />
			<ProjectStatusChip currentStatus="IN_PROGRESS" />
			<ProjectStatusChip currentStatus="SENT" />
			<ProjectStatusChip currentStatus="DELAYED" />
			<ProjectStatusChip currentStatus="REQUEST_MODIFICATION" />
		</Box>
	);
}

export default ProjectDetailsView;
