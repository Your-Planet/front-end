import PageContainer from "@/components/common/PageContainer";
import StudioProfileFormView from "@/components/mypage/studio/StudioProfileView/components/StudioProfileFormView";

interface StudioProfileViewProps {}

function StudioProfileView(props: StudioProfileViewProps) {
	const {} = props;

	return (
		<section>
			<PageContainer sx={{ padding: "32px 20px" }}>
				<StudioProfileFormView />
			</PageContainer>
		</section>
	);
}

export default StudioProfileView;
