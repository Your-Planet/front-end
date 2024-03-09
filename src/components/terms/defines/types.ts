// TODO: Terms 관련해서 backend와 상의
export interface TermsRequest {
	all: boolean;
	termsOfService: boolean;
	privacyPolicy: boolean;
	shoppingInformation: boolean;
}

export interface TermsForm extends TermsRequest {}
