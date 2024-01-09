import { StyledH1Logo, StyledLinkLogo } from "@/components/common/Logo/defines/styles";

interface LogoProps {
	href?: string;
}

const LOGO_LABEL = "Your Planet";

const Logo = ({ href }: LogoProps) => {
	return href ? <StyledLinkLogo href={href}>{LOGO_LABEL}</StyledLinkLogo> : <StyledH1Logo>{LOGO_LABEL}</StyledH1Logo>;
};

export default Logo;
