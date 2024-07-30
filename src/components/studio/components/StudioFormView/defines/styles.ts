import { STUDIO_FORM_WIDTH } from "@/components/studio/defines/constants";
import { styled } from "@mui/material";

export const StyledStudioForm = styled("form")`
	margin-top: 32px;
	max-width: ${STUDIO_FORM_WIDTH}px;
	display: flex;
	flex-direction: column;
	gap: 16px;
`;
