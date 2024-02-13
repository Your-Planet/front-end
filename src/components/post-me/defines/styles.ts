import { DEFAULT_OF_PORTFOLIO_LINK, ERROR_COLOR } from "@/defines/common/constants";

export const hoverStyle = (linksLength: number) => ({
	"&:hover": {
		color: `${linksLength > DEFAULT_OF_PORTFOLIO_LINK && ERROR_COLOR}`,
	},
});
