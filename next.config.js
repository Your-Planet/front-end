/** @type {import('next').NextConfig} */

const EC2_SERVER_URL = "http://ec2-15-164-160-23.ap-northeast-2.compute.amazonaws.com:8080";

const SERVER_URL_BY_ENVIRONMENT = {
	development: EC2_SERVER_URL,
	test: "http://localhost:8080",
	production: EC2_SERVER_URL,
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
			{
				protocol: "http",
				hostname: "ec2-15-164-160-23.ap-northeast-2.compute.amazonaws.com",
				pathname: "/files/**",
			},
		],
	},
};

module.exports = nextConfig;
