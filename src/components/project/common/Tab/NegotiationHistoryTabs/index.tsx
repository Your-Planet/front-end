import Tab from "@/components/project/common/Tab";
import { NEGOTIATION_PROGRESS_TYPE } from "@/defines/forms/project/constants/project.constants.details";
import { NegotiationProgressType } from "@/defines/forms/project/types";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import { Box } from "@mui/material";
import { Fragment } from "react";

type NegotiationHistoryTabProps = {
	currentNegotiationProgress?: NegotiationProgressType;
};

function NegotiationHistoryTab(props: NegotiationHistoryTabProps) {
	const { currentNegotiationProgress } = props;
	const negotiationProgressEntries = Object.entries(NEGOTIATION_PROGRESS_TYPE);

	return (
		<Box sx={{ display: "flex", alignItems: "center" }}>
			{negotiationProgressEntries.map(([negotiationProgress, label], index) => (
				<Fragment key={negotiationProgress}>
					<Tab
						size="small"
						height="2rem"
						text={label}
						disabled={currentNegotiationProgress !== negotiationProgress}
						variant={currentNegotiationProgress === negotiationProgress ? "contained" : "outlined"}
					/>
					{index < negotiationProgressEntries.length - 1 && <ChevronRightRoundedIcon color="disabled" />}
				</Fragment>
			))}
		</Box>
	);
}

export default NegotiationHistoryTab;
