import { Box, styled } from "@mui/material";
import { ReactNode } from "react";

type Props = { children: ReactNode };

const StyledCentralBox = styled(Box)`
	width: 100%;
	min-width: 300px;
	max-width: 520px;
	margin: auto;
	padding: 2rem;
`;

function CentralBox({ children }: Props) {
	return <StyledCentralBox>{children}</StyledCentralBox>;
}

export default CentralBox;
