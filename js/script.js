console.log('vue ok', Vue);

const { createApp } = Vue;
const app = createApp({
    data(){
        return{
            greatings: 'Hello Vue JS'
        }
    }
});
app.mount('#root');
