import AdminPage from "./pages/AdminPage";
import MainPage from "./pages/MainPage";

import { ADMIN_ROUTE, MAIN_ROUTE} from "./utils/consts";

export const allRoutes = [
    {
        path: ADMIN_ROUTE, 
        Component: AdminPage 
    },
    {
        path: MAIN_ROUTE, 
        Component: MainPage 
    },
]