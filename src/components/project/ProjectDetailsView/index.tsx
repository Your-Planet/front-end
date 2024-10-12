import NegotiationHistoryTab from "@/components/project/components/Tab/NegotiationHistoryTabs";
import { Box } from "@mui/material";

function ProjectDetailsView() {
	return (
		<Box>
			{/* TODO: @나은찬 pass the prop */}
			<NegotiationHistoryTab currentNegotiationProgress="IN_NEGOTIATION" />
		</Box>
	);
}

export default ProjectDetailsView;
