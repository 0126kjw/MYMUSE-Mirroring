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
		],
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
