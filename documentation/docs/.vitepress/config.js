module.exports = {
	title: 'Документация',
	lang: 'ru',
	base: '/docs/',

	themeConfig: {
		sidebar: getSidebar(),
		outlineTitle: 'На этой странице'
	}
}

function getSidebar() {
	return [
		{
			text: 'Пункт меню',
			items: [
				{ text: 'Подпункт меню', link: '/menu/child' },
			],
		},
	]
}
