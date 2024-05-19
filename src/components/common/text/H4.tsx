import { styled } from "@mui/material";

interface H4Props {
	children: string;
}

const StyledH4 = styled("h2")`
	font-size: 24px;
	font-weight: bold;
`;

function H4(props: H4Props) {
	const { children } = props;

	return <StyledH4>{children}</StyledH4>;
}

export default H4;
