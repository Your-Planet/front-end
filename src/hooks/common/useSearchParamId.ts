import { useSearchParams } from "next/navigation";

export default function useSearchParamId() {
	const params = useSearchParams();
	return params.get("id") as unknown as number;
}
