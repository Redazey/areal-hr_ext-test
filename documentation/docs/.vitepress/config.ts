import { defineConfig } from 'vitepress'

export default defineConfig({
    title: 'Areal HR_EXT test',
    description: 'Документация для frontend (Vue) и backend (NestJS)',
    themeConfig: {
        nav: [
            { text: 'Frontend', link: '/frontend/' },
            { text: 'Backend', link: '/backend/' }
        ],
        sidebar: {
            '/frontend/': [
                {
                    text: 'Frontend (Vue)',
                    items: [
                        { text: 'Введение', link: '/frontend/' },
                        { text: 'Взаимодействие с backend', link: '/frontend/api-client.md' },
                        { text: 'Компоненты', link: '/frontend/components' },
                    ]
                }
            ],
            '/backend/': [
                {
                    text: 'Backend (NestJS)',
                    items: [
                        { text: 'Введение', link: '/backend/' },
                        { text: 'API', link: '/backend/api.md' },
                    ]
                }
            ]
        }
    }
})
