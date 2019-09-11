export default {
    install(Vue: any, options: any) {
        // 1. add global method or property
        Vue.myGlobalMethod = function () {
        // some logic ...
        }
    
        // 2. add a global asset
        Vue.directive('my-directive', {
            bind (el: any, binding: any, vnode: any, oldVnode: any) {
                // some logic ...
            }
        })
    
        // 3. inject some component options
        Vue.mixin({
            created: function () {
                console.log('hello')
            }
        })
    
        // 4. add an instance method
        Vue.prototype.$myMethod = function (methodOptions: any) {
        // some logic ...
        }
    }
}