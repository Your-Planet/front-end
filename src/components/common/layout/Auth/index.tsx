import { GetServerSidePropsContext } from "next";

export const requireAuthentication = (gssp: any) => async (context: GetServerSidePropsContext) => {
	const { req } = context;
	const token = req.cookies.accessToken;

	if (!token) {
		return {
			redirect: {
				destination: "/",
				permanent: false,
			},
		};
	}

	// Run `getServerSideProps` to get page-specific data
	const gsspData = await gssp(context);

	// Pass page-specific props along with user data from `requireAuthentication` to component
	return {
		props: {
			...gsspData.props,
		},
	};
};
