
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import DarkMode from "./components/DarkMode/DarkMode";

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
