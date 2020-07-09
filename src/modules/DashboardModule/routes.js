import DashboardLayout from "./DashboardLayout";
import DashboardPage from "./Pages/DashboardPage";
import { TestPage } from './Pages/TestPage';

const routes = [
    {
        path: '/dashboard',
        component: DashboardLayout,
        routes: [
            {
                path: "/dashboard/test",
                component: TestPage
            },
            {
                path: "",
                component: DashboardPage,
                exact: true,      
            },
        ]
    }
];


export default routes;
