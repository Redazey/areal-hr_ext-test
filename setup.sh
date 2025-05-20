#!/bin/bash

sudo npm install -g npm-add-script

mkdir documentation
cd documentation

npm init -y
npm i -D vitepress

echo ".DS_Store
node_modules
docs/.vitepress/dist" > .gitignore

npmAddScript -k dev -v "vitepress dev docs"
npmAddScript -k build -v "vitepress build docs"
npmAddScript -k serve -v "vitepress serve docs"

mkdir docs
echo "# Документация" > docs/index.md

mkdir docs/.vitepress

mkdir docs/menu
echo "# Пример описания" > docs/menu/child.md

echo "module.exports = {
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
}" > docs/.vitepress/config.js