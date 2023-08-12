/** @typedef { import("semantic-release").Config } SemanticReleaseConfig */

/** @type {SemanticReleaseConfig} */
module.exports = {
	branches: ['main'],
	plugins: [
		"@semantic-release/commit-analyzer",
		"@semantic-release/changelog",
		"@semantic-release/npm",
		"@semantic-release/git",
		"@semantic-release/github"
	],
}