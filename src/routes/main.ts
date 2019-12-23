import { RouteProps } from 'react-router-dom'
import {
  MainLayout,
  AuthLayout,

} from '../layouts';
import Food from '../app/food'

export const mainRouting: RouteProps[] = [
  {
    path: '/food',
    component: Food
  }
]

const indexRouting : RouteProps[] = [
  {
    path: '/auth/',
    component: AuthLayout,
    exact: false
  },
  {
    path: '/',
    component: MainLayout,
    exact: false
  },

]

export default indexRouting;
