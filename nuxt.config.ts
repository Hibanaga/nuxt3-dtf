// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    colorMode: undefined,
    components: true,
    debug: true,
    css: [
      '~/src/theme/globals.scss'
    ],
    modules: [
        ['@nuxtjs/google-fonts', {
            families: {
                "Roboto Mono": true,
                download: true,
                inject: true
            }
        }],
        ['@nuxthq/ui'],
    ],
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
        }
    }
})

