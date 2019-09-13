import ValidationExtensionClient from './clients/validate-extension-client'

export default {
    install(Vue: any) {
        Vue.mixin({
            mounted() {
                return new ValidationExtensionClient(this.$validator)
            }
        })
    }
}