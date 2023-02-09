/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		dangerouslyAllowSVG: true,
		domains: ["rb.gy", "asset.kompas.com"],
	},
};

module.exports = nextConfig;
