import NegotiationHistoryTab from "@/components/project/components/NegotiationHistoryTab/NegotiationHistoryTabs";
import { Box } from "@mui/material";
import NegotiationHistoryChip from "../components/NegotiationHistoryChip/index";

function ProjectDetailsView() {
	return (
		<Box>
			{/* TODO: @나은찬 pass the prop */}
			<NegotiationHistoryTab currentNegotiationProgress="IN_NEGOTIATION" />
			<NegotiationHistoryChip label="회신 필요" color="error" />
			<NegotiationHistoryChip label="진행 중" disabled />
			<NegotiationHistoryChip label="발송 완료" color="primary" />
			<NegotiationHistoryChip label="발송 지연" color="error" />
			<NegotiationHistoryChip label="수정 요청" color="success" />
		</Box>
	);
}

export default ProjectDetailsView;
