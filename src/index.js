import Vue from 'vue';
import App from './app.vue';

import './assets/styles/test.css'
import './assets/images/backage.png'
import './assets/styles/styl-dd.styl'


const root = document.createElement('div')
document.appendChild(root)

new Vue({
    render: (h) => h(App)
}).$mount(root)