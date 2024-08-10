import { type Router, type RouteRecordRaw } from 'vue-router'

const AuthModule = () => import('./AuthModule.vue')
const LoginPage = () => import('./login/LoginView.vue')

const moduleRoutes: RouteRecordRaw = {
  path: '/auth',
  name: 'auth',
  component: AuthModule,
  children: [
    {
      path: 'login',
      name: 'login',
      component: LoginPage
    }
  ]
}

export const registerAuthRoutes = (router: Router) => router.addRoute(moduleRoutes)
