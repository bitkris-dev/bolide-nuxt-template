module.exports = {
	root: true,
	parser: 'babel-eslint',
	env: {
		browser: true,
		node: true
	},
	extends: 'standard',
	// required to lint *.vue files
	plugins: [
		'html'
	],
	// add your custom rules here
	"rules":{
		"indent": [2, "tab"],
		"no-tabs": 0,
		"no-redeclare": 1
	},
	globals: {}
}