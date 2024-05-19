import { styled } from "@mui/material";

interface H5Props {
	children: string;
}

const StyledH5 = styled("h5")`
	font-size: 20px;
	font-weight: bold;
`;

function H5(props: H5Props) {
	const { children } = props;

	return <StyledH5>{children}</StyledH5>;
}

export default H5;
