import Vue from 'vue'
import  VueRouter from 'vue-router'
import TriviaApp from './components/TriviaApp.vue'




Vue.use(VueRouter)



export let router = new VueRouter({

    mode:'history',

    routes: [

        {path:'/', component: TriviaApp}

    ]


})