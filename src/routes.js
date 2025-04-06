import CoursesPanle from "./components/CoursesPanel/CoursesPanle";
import FainancialTransactions from "./components/FainancialTransactions/FainancialTransactions";
import MainPanelUser from "./components/MainPanel/MainPanelUser";
import Index from "./pages/Index/Index";
import PanelUser from "./pages/PanelUser/PanelUser";
const routes = [
    { path: "/", element: <Index /> },
    {
        path: "/paneluser",
        element: <PanelUser />,
        children: [
          { path: "my-account", element: <MainPanelUser /> },
          { path: "course", element: <CoursesPanle /> },
          { path: "transaction", element: <FainancialTransactions /> },
          { path: "comment", element: <PanelUser /> },
          { path: "edit-profile", element: <PanelUser /> },
          { path: "*", element: <h1>404 Not Found</h1> },
        ],
      },

]
export default routes;
