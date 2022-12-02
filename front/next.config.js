// /** @type {import('next').NextConfig} */
// const nextConfig = {
// 	reactStrictMode: true,
// }

// module.exports = nextConfig

/** @type {import('next').NextConfig} */

const nextConfig = {
	//image
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'images.unsplash.com',
			},
			{
				protocol: 'http',
				hostname: 'ticketimage.interpark.com',
			},
		],
		deviceSizes: [120, 250, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
	},
	reactStrictMode: true,
	env: {
		BASE_URL: process.env.BASE_URL,
	},
	// webpack5: true,
	// webpack: (config) => {
	// 	config.resolve.fallback = { fs: false };
	// 	return config;
	// },
};

module.exports = nextConfig;
