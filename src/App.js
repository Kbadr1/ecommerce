import "./styles/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useTranslation } from "react-i18next";
import cookies from "js-cookie";

function App() {
  const { t } = useTranslation();
  const languages = useSelector((state) => state.i18Reducer.languages);
  const currentLanguageCode = cookies.get("i18next") || "en";
  const currentLanguage = languages.find(
    (lang) => lang.code === currentLanguageCode
  );

  useEffect(() => {
    document.body.dir = currentLanguage.dir;
    document.title = t("app_title");
  }, [currentLanguage, t]);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
