import { styled } from "@mui/material";

interface H3Props {
	children: string;
}

const StyledH3 = styled("h3")`
	font-size: 28px;
	font-weight: bold;
`;

function H3(props: H3Props) {
	const { children } = props;

	return <StyledH3>{children}</StyledH3>;
}

export default H3;
