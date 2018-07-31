import Vue from 'vue'
import App from './App.vue'

import Cart from './components/pages/Cart'
import Product from './components/pages/Product'

import VueRouter from 'vue-router'

Vue.use(VueRouter)

Vue.config.productionTip = false

const routes = [
    { path: '/cart', component: Cart },
    { path: '/product', component: Product },
    { path: '*', redirect: '/product' },
]

// 3. Создаём экземпляр маршрутизатора и передаём маршруты в опции `routes`
// Вы можете передавать и дополнительные опции, но пока не будем усложнять.
const router = new VueRouter({
    routes // сокращённая запись для `routes: routes`
})


new Vue({
    router, render: h => h(App)
}).$mount('#app')
