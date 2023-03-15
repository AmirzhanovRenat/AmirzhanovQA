import { createApp } from 'vue';
import App from './App.vue';
import component from './components/UI';
const app = createApp(App);
app.mount('#app');

component.forEach(() => app.component(component.name, component));

// import code from './code.vue';
// createApp(App).mount('#app');
// createApp(code).mount('#code');
