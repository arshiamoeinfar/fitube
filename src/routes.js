import Index from "./pages/Index/Index";
import Login from "./pages/Login/Login";
import Movie from "./pages/Movie/Movie";
const routes = [
    { path: "/", element: <Index /> },
    { path: "/movie", element: <Movie /> },
    { path: "/login", element: <Login /> },
]
export default routes;
