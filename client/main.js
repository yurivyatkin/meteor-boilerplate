import { Template } from 'meteor/templating'
import Vue from 'vue'

// if you are familiar with Vue and want to add VueRouter
// feel free to code it and import here
// import router from './router'
import './main.html'

// import Vue App component
import App from './App.vue'

Template.vueApp.rendered = function() {
    // Create new Vue application
    const vm = new Vue({
        el: '#app',
        // router,  # if we have it
        render: h => h(App)
    })
}
