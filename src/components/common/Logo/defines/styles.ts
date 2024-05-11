import { styled } from "@mui/system";
import Link from "next/link";

const LOGO_SIZE = 45;

const StyledLogo = {
	fontSize: LOGO_SIZE,
	fontFamily: "Futura-pt-bold-oblique",
	color: "black",
	fontWeight: "bold",
	textDecoration: "none",
};

export const StyledLinkLogo = styled(Link)(StyledLogo);

export const StyledH1Logo = styled("h1")(StyledLogo);
