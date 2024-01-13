/** @type {import('next').NextConfig} */

const SERVER_URL_BY_ENVIRONMENT = {
	development: "http://localhost:8080",
	test: "http://localhost:8080",
	production: "https://port-0-back-end-1efqtf2dlr6ithdn.sel5.cloudtype.app/",
};

const nextConfig = {
	reactStrictMode: false,
	async rewrites() {
		return [
			{
				source: "/api/:path*",
				destination: `${SERVER_URL_BY_ENVIRONMENT[process.env.NODE_ENV]}/:path*`,
			},
		];
	},
};

module.exports = nextConfig;
