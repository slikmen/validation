import ValidationExtensionClient from './clients/validate-extension-client';
const AcceptedTypes = ['text', 'textarea'];

export default {
    install(Vue: any) {
        Vue.mixin({
            mounted() {
                return new ValidationExtensionClient(this.$validator);
            }
        })

        Vue.directive('validate-custom', {
            bind (el: any) {
                const InputType = el.getAttribute('type') || el.tagName.toLowerCase();
                if (AcceptedTypes.indexOf(InputType) !== -1) {
                    el.setAttribute('data-validate', 'true');
                }  
            }
        })
    }
}