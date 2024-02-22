"use client";

import {
	StyledErrorCode,
	StyledErrorDescription,
	StyledErrorTitle,
	StyledErrorViewContainer,
} from "@/components/error/defines/styles";
import { ErrorViewProps } from "@/components/error/defines/types";

function ErrorView(props: ErrorViewProps) {
	const { errorCode, title, description } = props;

	return (
		<StyledErrorViewContainer>
			{errorCode && <StyledErrorCode>{errorCode}</StyledErrorCode>}
			<StyledErrorTitle>{title}</StyledErrorTitle>
			<StyledErrorDescription>{description}</StyledErrorDescription>
		</StyledErrorViewContainer>
	);
}

export default ErrorView;
