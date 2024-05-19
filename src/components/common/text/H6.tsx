import { styled } from "@mui/material";

interface H6Props {
	children: string;
}

const StyledH6 = styled("h2")`
	font-size: 16px;
	font-weight: bold;
`;

function H6(props: H6Props) {
	const { children } = props;

	return <StyledH6>{children}</StyledH6>;
}

export default H6;
