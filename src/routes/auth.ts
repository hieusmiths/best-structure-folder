import { RouteProps } from 'react-router-dom'
import {
  Login,
  Register
 } from '../app/auth';

const authRouting: RouteProps[] = [
  {
    path: '/login',
    component: Login,
    exact: true
  },
  {
    path: '/register',
    component: Register,
    exact: true
  }
]

export default authRouting;
