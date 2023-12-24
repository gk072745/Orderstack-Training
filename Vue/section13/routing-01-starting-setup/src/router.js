import { createRouter, createWebHistory } from 'vue-router'
import TeamsList from './pages/TeamsList.vue'
import UsersList from "./pages/UsersList.vue"
import TeamMembers from "./components/teams/TeamMembers.vue"
import NotFound from './pages/NotFound.vue'
import TeamsFooter from "./pages/TeamsFooter.vue"


const router = createRouter({
    history: createWebHistory(),
    routes: [
        // { path: '/', redirect: '/teams' },//....alias alternative
        {
            name: 'teams',
            path: '/teams',
            components: {
                default: TeamsList,
                footer: TeamsFooter
            },
            alias: '/',
            children: [
                {
                    name: 'team-memebers',
                    path: ':teamId',
                    component: TeamMembers,
                    props: true
                },
            ]
        },
        {
            path: '/users',
            component: UsersList,
            meta: { needsAuth: true },
            // for single route use beforeenter in place of beforeach
            beforeEnter(to, from, next) {
                console.log(to, from)
                next()
            }
        },

        { path: '/:notFound(.*)', component: NotFound, },
    ],
    linkActiveClass: 'router-link-active',
    scrollBehavior(to, from, savedPosition) {
        console.log(to, from, savedPosition)
        if (savedPosition) {
            return savedPosition
        }
        return { left: 0, top: 0, }
    }
})

// navigation Guard
router.beforeEach(function (to, from, next) {
    console.log(to, from)
    if (to.meta.needsAuth) {
        console.log('needs auth')
        next()
    } else {
        next()
    }
    // next()
    // next(true)
    // next(false)
    // next('/users)

    // if (to.path === '/users') {
    //     next()
    // } else {
    //     next({
    //         path: '/users'
    //     })
    // }

    next()
});

router.afterEach((to, from) => {
    console.log('after :', to, from)
})


export default router