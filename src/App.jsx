import { useEffect} from "react";
import "./App.scss";
import { routes } from "./routes/routes";
import i18n from "./utils/i18n";
import { RouterProvider } from "react-router-dom";

function App() {
  // set default lang
  const { lang, direction } = localStorage;
  useEffect(() => {
    if (lang && direction) {
      i18n.changeLanguage(lang);
      document.body.style.direction = direction;
      document.body.classList.add(lang);
    } else {
      localStorage.lang = "en";
      localStorage.direction = "ltr";
    }
  }, []);
  // set default lang
  return <RouterProvider router={routes} />;
}

export default App;
