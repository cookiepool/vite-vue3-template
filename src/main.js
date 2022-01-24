import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

const app = createApp(App);
app.use(router).use(store).mount('#app');

// 饿了么按需引入也会自动注入，不许要手动添加，使用use(ElButton)方法时才会自动注入
// app.config.globalProperties.$msgbox = ElMessageBox;
// app.config.globalProperties.$message = ElMessage;
// app.config.globalProperties.$notify = ElNotification;
