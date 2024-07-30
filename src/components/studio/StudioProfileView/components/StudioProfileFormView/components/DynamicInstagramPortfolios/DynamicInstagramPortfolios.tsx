import DynamicAppend from "@/components/common/DynamicAppend";
import DynamicInstagramPortfolioTextField from "@/components/studio/StudioProfileView/components/StudioProfileFormView/components/DynamicInstagramPortfolios/components/DynamicInstagramPortfolioTextField";
import { DEFAULT_PORTFOLIO, STUDIO_PROFILE_FORM_LENGTH } from "@/components/studio/StudioProfileView/defines/constants";
import { StudioProfileForm } from "@/components/studio/StudioProfileView/defines/types";

interface DynamicInstagramPortfoliosProps {
	label: string;
}

function DynamicInstagramPortfolios(props: DynamicInstagramPortfoliosProps) {
	const { label } = props;

	return (
		<DynamicAppend<StudioProfileForm>
			label={label}
			formName="portfolios"
			component={({ index }) => <DynamicInstagramPortfolioTextField index={index} />}
			maxCount={STUDIO_PROFILE_FORM_LENGTH.portfolios.max}
			defaultValue={DEFAULT_PORTFOLIO}
			required
		/>
	);
}

export default DynamicInstagramPortfolios;
