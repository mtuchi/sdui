import { createRouter, createWebHashHistory } from 'vue-router';

import Home from '../pages/Index.vue';
import About from '../pages/About.vue';
import GDPR from '../pages/GDPR.vue';
import News from '../pages/News.vue';
import Os from '../pages/Os.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    // Assuming you're using the default permalink structure for posts
    path: '/:postSlug',
    name: 'News',
    component: News,
  },
  {
    path: '/gdpr',
    name: 'GDPR',
    component: GDPR,
  },
  {
    path: '/os',
    name: 'Os',
    component: Os,
  },
];

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`,
})


export default router;