// Import the router
import { RouterFactory, nativeScrollBehavior } from 'meteor/akryum:vue-router2';

// Create router instance
const routerFactory = new RouterFactory({
  mode: 'history',
  scrollBehavior: nativeScrollBehavior
});

import Home from '/imports/ui/pages/Home.vue';
import Meteor from '/imports/ui/pages/Meteor.vue';
import Apollo from '/imports/ui/pages/Apollo.vue';
import Vue from '/imports/ui/pages/Vue.vue';
import Tailwind from '/imports/ui/pages/Tailwind.vue';

RouterFactory.configure(factory => {
    factory.addRoutes([
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/meteor',
            name: 'meteor',
            component: Meteor,
        },
        {
            path: '/apollo',
            name: 'apollo',
            component: Apollo,
        },
        {
            path: '/vue',
            name: 'vue',
            component: Vue,
        },
        {
            path: '/tailwind',
            name: 'tailwind',
            component: Tailwind,
        },
    ]);
});

// Not found
import NotFound from '/imports/ui/pages/NotFound.vue';

RouterFactory.configure(router => {
  router.addRoute({
    path: '*',
    component: NotFound,
  });
}, -1);

export default routerFactory;
