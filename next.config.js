/** @type {import('next').NextConfig} */

const SERVER_URL_BY_ENVIRONMENT = {
	development: "http://localhost:8080",
	test: "http://localhost:8080",
	production: "https://ec2-15-164-160-23.ap-northeast-2.compute.amazonaws.com:8080",
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
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "www.instagram.com",
				pathname: "/p/**",
			},
		],
	},
};

module.exports = nextConfig;
