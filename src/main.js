import { createApp } from "vue";

import  router  from './router.js';
import store from './components/store/index.js'

import App from "./App.vue";
import baseCard  from './components/ui/baseCard.vue';
import baseButton  from './components/ui/baseButton.vue';
import baseBadge  from './components/ui/baseBadge.vue';



const app = createApp(App) ;

app.use(router);
app.use(store);
app.component('base-card',baseCard);
app.component('base-button',baseButton);
app.component('base-badge',baseBadge);


app.mount("#app");
