import Index from "./pages/Index/Index";
import Login from "./pages/Login/Login";
import PanelUser from "./pages/PanelUser/PanelUser";
const routes = [
    { path: "/", element: <Index /> },
    { path: "/login", element: <Login /> },
    {path: "/paneluser", element: <PanelUser /> },
]
export default routes;
