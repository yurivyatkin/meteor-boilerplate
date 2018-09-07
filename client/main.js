// Libaries
import {Meteor} from 'meteor/meteor';
import Vue from 'vue';
import routerFactory from '/imports/routes';

// Main app
import App from '/imports/ui/layouts/App.vue';

// App start
Meteor.startup(() => {
    // Start the router
    const router = routerFactory.create();
    new Vue({
        router,
        render: h => h(App),
    }).$mount('app');
});
