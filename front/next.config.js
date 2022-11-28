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
	reactStrictMode: false,
	webpack5: true,
	webpack: (config) => {
		config.resolve.fallback = { fs: false };
		return config;
	},
};

module.exports = nextConfig;
