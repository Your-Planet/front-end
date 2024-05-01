import DynamicAppend from "@/components/common/DynamicAppend";
import ReactHookForm from "@/components/common/ReactHookForm";
import {
	DEFAULT_PORTFOLIO,
	STUDIO_PROFILE_FORM_LENGTH,
} from "@/components/mypage/studio/StudioProfileView/defines/constants";
import { StudioProfileForm } from "@/components/mypage/studio/StudioProfileView/defines/types";

export interface DynamicInstagramPortfoliosProps {}

function DynamicInstagramPortfolios(props: DynamicInstagramPortfoliosProps) {
	const {} = props;

	const { TextField } = ReactHookForm<StudioProfileForm>();

	return (
		<DynamicAppend<StudioProfileForm>
			label="포트폴리오 링크"
			formName="portfolios"
			component={({ index }) => <TextField formName={`portfolios.${index}.permalink`} label="" fullWidth />}
			maxCount={STUDIO_PROFILE_FORM_LENGTH.portfolios.max}
			defaultValue={DEFAULT_PORTFOLIO}
			required
		/>
	);
}

export default DynamicInstagramPortfolios;
