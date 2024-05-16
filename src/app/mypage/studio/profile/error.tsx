"use client";

import { ErrorPageProps } from "@/defines/errors/types";

// TODO @김현규 공통 에러 페이지 뷰
function Error(props: ErrorPageProps) {
	const { error } = props;

	console.log("error!!!!!!!!!!", error);

	return <>에러.....</>;
}

export default Error;
