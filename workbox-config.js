module.exports = {
	globDirectory: 'public/',
	globPatterns: [
		'**/*.{png,xml,ico,html,svg,jpg,webmanifest}'
	],
	swDest: 'public/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};