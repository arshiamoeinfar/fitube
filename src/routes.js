import CommentPanel from "./components/CommentPanel/CommentPanel";
import CoursesPanle from "./components/CoursesPanel/CoursesPanle";
import EditPanelUser from "./components/EditPanelUser/EditPanelUser";
import FainancialTransactions from "./components/FainancialTransactions/FainancialTransactions";
import MainPanelUser from "./components/MainPanel/MainPanelUser";
import NotificationPanel from "./components/NotificationPanel/NotificationPanel";
import ArticleInfo from "./pages/ArticleInfo/ArticleInfo";
import DetailCourse from "./pages/DetailCourses/DetailCourse";
import Index from "./pages/Index/Index";
// import Login from "./pages/Login/Login";
import Register from "./pages/Login/Register";
import PanelUser from "./pages/PanelUser/PanelUser";
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";
const routes = [
    { path: "/", element: <Index /> },
    { path: "/cart", element: <ShoppingCart /> },
    { path: "/course-info/:curseName", element: <DetailCourse /> },
    { path: "/article-info/:articleName", element: <ArticleInfo /> },
    { path: "/register", element: <Register /> },
    {
        path: "/paneluser",
        element: <PanelUser />,
        children: [
          { path: "my-account", element: <MainPanelUser /> },
          { path: "course", element: <CoursesPanle /> },
          { path: "transaction", element: <FainancialTransactions /> },
          { path: "comment", element: <CommentPanel /> },
          { path: "edit-profile", element: <EditPanelUser /> },
          { path: "notification", element: <NotificationPanel /> },
          { path: "*", element: <h1>404 Not Found</h1> },
        ],
      },

]
export default routes;
