import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/router';
import store from './store/store';


const app = createApp( App );
app.config.globalProperties.$store = store;
app.use( router ).mount( '#app' );