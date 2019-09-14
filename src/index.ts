import _ from 'lodash'
import ValidationExtensionClient from './clients/validate-extension-client';

export default {
    install(Vue: any, global: any) {
        if (global === undefined) {
            global = false
        }
        const AcceptedTypes = ['input', 'textarea'];
       
        Vue.mixin({
            mounted() {
                return new ValidationExtensionClient(this.$validator, global, this.$el);
            }
        })

        Vue.directive('validate-custom', {
            bind (el: any) {
                if (!global) {
                    const InputType = el.getAttribute('type') || el.tagName.toLowerCase();
                    const CanBeValidated: string = el.getAttribute('data-validate')
                    if (CanBeValidated) { return }
                    if (AcceptedTypes.indexOf(InputType) !== -1) {
                        el.setAttribute('data-validate', 'true');
                    }  
                }
            }
        })
    }
}