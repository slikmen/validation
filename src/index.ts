// import MyComponent from './components/Component.vue'

export default {
    install(Vue: any, options: any) {
        // 1. add global method or property
        // Vue.component(MyComponent.name, MyComponent)
        Vue.myGlobalMethod = () => {
        // some logic ...
        }
    
        // 2. add a global asset
        Vue.directive('my-directive', {
            bind (el: any, binding: any, vnode: any, oldVnode: any) {
                // Bind directive
            }
        })
    
        // 3. inject some component options
        Vue.mixin({
            methods: {
                getAllInputs(el: any) {
                    return el.getElementsByTagName('input');
                }
            },
            created: (el: any) => {
                let inputs = Vue.getAllInputs(el)
                inputs.map((input: any) => {
                    let fieldName = input.srcElement.name
                    const field: any = Vue.$validator.fields.find({ name: fieldName })

                    input.addEventListener('blur', (x: any) => {
                        input.style.borderColor = 'blue'
                        field.reset()
                        Vue.$validator.errors.remove(field.name, field.scope)
                    })

                    input.addEventListener('focus', (x: any) => {
                        input.style.borderColor = 'red'
                        Vue.$validator.validate(field.name)
                    })
                })
            }
        })
    
        // 4. add an instance method
        Vue.prototype.$myMethod = (methodOptions: any, el: any) => {
        //    Method
        }
    }
}