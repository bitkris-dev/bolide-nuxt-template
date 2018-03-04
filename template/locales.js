import requireDir from 'webpack-requiredir'

export default function localesJSON () {
	// get .json files
	var localesJSON = requireDir(require.context('./locales', true, /\.json$/))
	return localesJSON
}
