import { AccordionProps, Box, Button, Typography } from "@mui/material";
import MuiAccordion from "@mui/material/Accordion";
import { styled } from "@mui/material/styles";

export const GRAY_COLOR = "#d1d5da";

export const StyledTermsViewBox = styled(Box)`
	max-width: 500px;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding-top: 1.75rem;
	padding-bottom: 1.75rem;
	margin: auto;
	gap: 1.75rem;
`;

export const StyledFlexColumnBox = styled(Box)`
	display: flex;
	flex-direction: column;
`;

export const StyledTypography = styled(Typography)`
	font-weight: 700;
`;

export const StyledFormBox = styled(StyledFlexColumnBox)`
	gap: 0.75rem;
`;

export const StyledAccordion = styled((props: AccordionProps) => (
	<MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
	border: `1px solid ${GRAY_COLOR}`,
	"&::before": {
		display: "none",
	},
	borderRadius: "6px",
}));

export const StyledButtonBox = styled(StyledFormBox)`
	flex-direction: row;
	justify-content: end;
`;

export const StyledButton = styled(Button)`
	font-weight: 700;
`;

export const StyledBackButton = styled(StyledButton)`
	background-color: rgb(156 163 175 / 1) !important;
`;
