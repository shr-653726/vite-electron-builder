import {createApp} from 'vue';
import App from '/@/App.vue';
import Vueform from '@vueform/vueform';
import defineConfig from '../../../vueform.config.js';

const app = createApp(App);
app.use(Vueform, defineConfig);
app.mount('#app');
