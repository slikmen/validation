# validation
![Version](https://img.shields.io/npm/v/@slikmen/vue-validation)
![License](https://img.shields.io/npm/l/@slikmen/vue-validation)
![Size](https://img.shields.io/github/repo-size/slikmen/validation)
## What purpose is this npm package

When I was developing, I found a feature that was not implemented yet.
The issue lies in Vee-validate Version 2.*.

I found that when I wanted to remove the error message on focus and revalidate field on blur
this was not possible. 

To make it possible I used the Vee-validation API to remove and validate.
This is just an extension on Vee-validate and works with every rule.

## How to use
For non-global you need to add a directive 'v-validate-custom'

```javascript
// import Script
import vueValidation from '@slikmen/vue-validation'
Vue.use(vueValidation)
<template>
    <div>
        <input name="field" v-validate="'required'" v-validate-custom>
        <p v-if="errors.has('field')">{{ errors.first('field') }}</p>
    </div>
</template>
```
### Global option
For global use you just need to add true in the Vue.use()
```javascript
// import Script
import vueValidation from '@slikmen/vue-validation'
Vue.use(vueValidation, true)

<template>
    <div>
        <input name="field" v-validate="'required'">
        <p v-if="errors.has('field')">{{ errors.first('field') }}</p>
    </div>
</template>
```