import { styled } from "@mui/material";

interface H1Props {
	children: string;
}

const StyledH1 = styled("h2")`
	font-size: 40px;
	font-weight: bold;
`;

function H1(props: H1Props) {
	const { children } = props;

	return <StyledH1>{children}</StyledH1>;
}

export default H1;
