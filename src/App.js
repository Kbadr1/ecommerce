import "./styles/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";
import { setCurrentLanguage } from "./redux/actions";

function App() {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const currentLanguage = useSelector(
    (state) => state.i18Reducer.currentLanguage
  );

  useEffect(() => {
    dispatch(setCurrentLanguage());
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
