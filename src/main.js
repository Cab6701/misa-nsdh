import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import { createApp } from 'vue'
import App from './App.vue'
import MsButton from './components/base/MsButton.vue';
const app = createApp(App);
app.component("MsButton", MsButton);
app.mount('#app')