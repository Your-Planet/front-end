import { StyledH1Logo, StyledLinkLogo } from "./defines/constants";

interface LogoProps {
	href?: string;
}

const LOGO_LABEL = "YourPlanet";

const Logo = ({ href }: LogoProps) => {
	return href ? <StyledLinkLogo href={href}>{LOGO_LABEL}</StyledLinkLogo> : <StyledH1Logo>{LOGO_LABEL}</StyledH1Logo>;
};

export default Logo;
