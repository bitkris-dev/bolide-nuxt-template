import requireDir from 'webpack-requiredir'
let en = requireDir(require.context('./en', true, /\.json$/))

export default en
