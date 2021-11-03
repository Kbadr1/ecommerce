import "./styles/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useTranslation } from "react-i18next";
import { setCurrentLanguage } from "./redux/actions";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { getUser } from "./redux/actions/userActions";

function App() {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const currentLanguage = useSelector(
    (state) => state.i18Reducer.currentLanguage
  );

  useEffect(() => {
    dispatch(setCurrentLanguage());
    dispatch(getUser());
    document.body.dir = currentLanguage.dir;
    document.title = t("app_title");
  }, [currentLanguage, t, localStorage.getItem("token")]);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
