const withMarkdoc = require('@markdoc/next.js')

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	pageExtensions: ['js', 'jsx', 'md', 'mdx'],
	swcMinify: true,
	experimental: {
		newNextLinkBehavior: true,
		scrollRestoration: true,
	},
}

module.exports = withMarkdoc()(nextConfig)
