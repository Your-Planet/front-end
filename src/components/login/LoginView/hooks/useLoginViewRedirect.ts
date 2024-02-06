import { useAuthContext } from "@/providers/AuthProvider";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function useLoginViewRedirect() {
	const { jwtPayload } = useAuthContext();

	const router = useRouter();

	useEffect(() => {
		if (jwtPayload) {
			router.push("/");
		}
	}, [jwtPayload]);
}

export default useLoginViewRedirect;
