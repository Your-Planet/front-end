import CreatorsPageView from "@/components/creators";
import { CreatorsProvider } from "@/components/creators/provider/CreatorsProvider";

function CreatorsPage() {
	return (
		<CreatorsProvider>
			<CreatorsPageView />
		</CreatorsProvider>
	);
}

export default CreatorsPage;
