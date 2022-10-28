import config from '~/config';

// Layouts
import { HeaderOnly } from '~/layouts';

// Link Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Login from '~/pages/Login';
import Register from '~/pages/Register';
import Search from '~/pages/Search';
import Live from '~/pages/Live';
import Dangnhap from '~/layouts/Dangnhap';
import Dangky from '~/layouts/Dangky';

// Public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.live, component: Live },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.login, component: Login, layout: Dangnhap },
    { path: config.routes.register, component: Register, layout: Dangky },
    { path: config.routes.search, component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
