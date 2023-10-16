import "./App.scss";
import { Header } from "./header/Header";
import { useRoutes } from "react-router-dom";
import { routes } from "./route-config";

function App() {
  const appRoutes = useRoutes(routes);
  return (
    <div className="App">
      <div className="app-layout">
        <Header />
        {appRoutes}
      </div>
    </div>
  );
}

export default App;
