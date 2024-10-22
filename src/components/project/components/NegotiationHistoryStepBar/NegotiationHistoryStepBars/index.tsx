import NegotiationHistoryStepBar from "@/components/project/components/NegotiationHistoryStepBar";
import { LABEL_BY_NEGOTIATION_PROGRESS } from "@/defines/forms/project/constants/project.constants.details";
import { NegotiationProgressType } from "@/defines/forms/project/types";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import { Box } from "@mui/material";
import { Fragment } from "react";

type NegotiationHistoryStepBarsProps = {
	currentNegotiationProgress?: NegotiationProgressType;
};

function NegotiationHistoryStepBars(props: NegotiationHistoryStepBarsProps) {
	const { currentNegotiationProgress } = props;
	const negotiationProgressEntries = Object.entries(LABEL_BY_NEGOTIATION_PROGRESS);

	return (
		<Box sx={{ display: "flex", alignItems: "center" }}>
			{negotiationProgressEntries.map(([negotiationProgress, label], index) => (
				<Fragment key={negotiationProgress}>
					<NegotiationHistoryStepBar
						label={label}
						disabled={currentNegotiationProgress !== negotiationProgress}
						isCurrentStep={currentNegotiationProgress === negotiationProgress}
					/>
					{index < negotiationProgressEntries.length - 1 && <ChevronRightRoundedIcon color="disabled" />}
				</Fragment>
			))}
		</Box>
	);
}

export default NegotiationHistoryStepBars;
