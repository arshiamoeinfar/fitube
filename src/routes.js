import CoursesPanle from "./components/CoursesPanel/CoursesPanle";
import MainPanelUser from "./components/MainPanel/MainPanelUser";
import Index from "./pages/Index/Index";
import PanelUser from "./pages/PanelUser/PanelUser";

import { Routes, Route } from "react-router-dom";
const routes = [
    { path: "/", element: <Index /> },
    {
        path: "/paneluser",
        element: <PanelUser />,
        children: [
          { path: "my-account", element: <MainPanelUser /> },
          { path: "course", element: <CoursesPanle /> },
          { path: "transaction", element: <PanelUser /> },
          { path: "comment", element: <PanelUser /> },
          { path: "edit-profile", element: <PanelUser /> },
          { path: "*", element: <h1>404 Not Found</h1> },
        ],
      },

]
export default routes;
