import { CreatorStudioResponse } from "@/apis/studio/models/studio";
import useSearchParamId from "@/hooks/common/useSearchParamId";
import useQueryGetCreatorStudio from "@/hooks/queries/studio/useQueryGetCreatorStudio";

export default function useCreatorStudio(): CreatorStudioResponse {
	const id = useSearchParamId();

	const { data: { data } = {} } = useQueryGetCreatorStudio({
		req: {
			id,
		},
		queryOption: {
			refetchOnWindowFocus: false,
			enabled: Boolean(id),
		},
	});

	return data!;
}
