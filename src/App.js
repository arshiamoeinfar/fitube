
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import globalStle from "./Styles/global.css";
import responsive from "./Styles/responsive.css"

function App() {
  const router = useRoutes(routes);

  console.log(router);

  return (
    <div className="">

      {router}
    </div>
  );
}

export default App;
