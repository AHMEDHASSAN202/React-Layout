import HomeLayout from "./HomeLayout";
import HomePage from "./Pages/HomePage";
import AboutUsPage from "./Pages/AboutUsPage";

const routes = [
    {
        path: '',
        component: HomeLayout,
        exact: true,
        routes: [
            {
                path: '/home',
                component: HomePage,      
                exact: true,      
            },
            {
                path: '/about',
                component: AboutUsPage,
            }
        ]
    }
];


export default routes;
