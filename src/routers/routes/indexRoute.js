import HomPage from '../../pages/HomPage';
import ShopPage from '../../pages/ShopPage';
import OrderPage from '../../pages/CartPage';
import DetailPage from '../../pages/DetailPage';
import FooterRouter from '../FooterRouter';
import AccountPage from '../../pages/AccountPage';
import ActiveAccountPage from '../../pages/ActiveAccountPage'
const indexRoute = [
    { path: '/shop/productType', extract: false, component: ShopPage},
    { path: '/order/cart', extract: false, component: OrderPage},
    { path: '/detail/:id', extract: false, component: DetailPage},
    {path: '/account', exact: true, component: AccountPage},
    {path: '/question', exact: false, component: FooterRouter},
    {path: '/active/account/:id', exact: false, component: ActiveAccountPage},
    { path: '/', extract: false, component: HomPage },
]

export default indexRoute