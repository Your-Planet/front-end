import { AccordionProps } from "@mui/material";
import MuiAccordion from "@mui/material/Accordion";
import { styled } from "@mui/material/styles";

export const GRAY_COLOR = "#d1d5da";

export const Accordion = styled((props: AccordionProps) => (
	<MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
	border: `1px solid ${GRAY_COLOR}`,
	"&::before": {
		display: "none",
	},
	borderRadius: "6px",
}));
