import ValidationExtensionClient from './clients/validate-extension-client'

export default {
    install(Vue: any) {
        Vue.mixin({
            mounted() {
                new ValidationExtensionClient(this.$validator)
            }
        })
    }
}