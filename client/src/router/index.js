import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import NewNote from '@/components/NewNote'
import Todos from '@/components/Todos'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/newnote',
            name: 'NewNote',
            component: NewNote
        },
        {
            path: '/todos',
            name: 'Todos',
            component: Todos
        }
    ]
})