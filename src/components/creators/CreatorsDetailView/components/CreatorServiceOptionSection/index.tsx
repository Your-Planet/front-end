import { ProvisionType, ServiceOptionType } from "@/apis/studio";
import CreatorServiceOptionList from "@/components/creators/CreatorsDetailView/components/CreatorServiceOptionSection/components/CreatorServiceOptionList";
import { useCreatorStudio } from "@/components/creators/CreatorsDetailView/providers/CreatorStudioProvider";
import { LABEL_BY_POST_DURATION_MONTH_TYPE, LABEL_BY_SERVICE_OPTION_TYPE } from "@/defines/price/constants";
import { styled } from "@mui/material";

const StyledSection = styled("section")`
	display: flex;
	gap: 72px;
	justify-content: center;
`;

function CreatorServiceOptionSection() {
	const studio = useCreatorStudio();

	// TODO @김현규 스켈레톤 UI
	if (!studio) {
		return <>로딩중</>;
	}

	const {
		price: { service, option },
	} = studio;

	const options = Object.entries(option);

	const getOptionLabels = (provisionType: ProvisionType) => {
		return options
			.filter(([_, serviceOption]) => serviceOption.provisionType === provisionType)
			.map(([optionType]) => LABEL_BY_SERVICE_OPTION_TYPE[optionType as ServiceOptionType]);
	};

	const defaultOptions = [
		`컷 수: ${service.defaultCuts}장`,
		`작업 기간: ${service.workingDays}일`,
		`수정 횟수: ${service.modificationCount}회`,
		`업로드 기간: ${LABEL_BY_POST_DURATION_MONTH_TYPE[service.postDurationMonthType]}`,
	].concat(getOptionLabels("DEFAULT"));

	const providingOptions = getOptionLabels("PROVIDED");

	return (
		<StyledSection>
			<CreatorServiceOptionList title="기본 제공 옵션" serviceOptions={defaultOptions} />
			<CreatorServiceOptionList title="추가 제공 옵션" serviceOptions={providingOptions} />
		</StyledSection>
	);
}

export default CreatorServiceOptionSection;
