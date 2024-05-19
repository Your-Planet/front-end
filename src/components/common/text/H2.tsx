import { styled } from "@mui/material";

interface H2Props {
	children: string;
}

const StyledH2 = styled("h2")`
	font-size: 32px;
	font-weight: bold;
`;

function H2(props: H2Props) {
	const { children } = props;

	return <StyledH2>{children}</StyledH2>;
}

export default H2;
