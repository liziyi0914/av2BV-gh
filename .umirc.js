
// ref: https://umijs.org/config/
export default {
	history: 'hash',
	publicPath: '/av2BV-gh/',
	treeShaking: true,
	plugins: [
		// ref: https://umijs.org/plugin/umi-plugin-react.html
		['umi-plugin-react', {
			antd: true,
			dva: false,
			dynamicImport: false,
			title: 'Bilibili av2BV',
			dll: false,

			routes: {
				exclude: [
					/components\//,
				],
			},
		}],
	],
}
