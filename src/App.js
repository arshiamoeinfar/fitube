
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import Background from "./components/Bacground/Backround";

function App() {
  const router = useRoutes(routes);

  console.log(router);

  return (
    <div className="">
      <Background />
      {router}
    </div>
  );
}

export default App;
