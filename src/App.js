import "./styles/App.css";
import { useEffect } from "react";
import {
  Home,
  Deals,
  Cart,
  Login,
  Register,
  Shop,
  Category,
  Orders,
} from "./pages/index";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./redux/actions/userActions";
import { setCurrentLanguage } from "./redux/actions";
import { useTranslation } from "react-i18next";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";

function App() {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const isAuthinticated = useSelector(
    (state) => state.authReducer.isAuthinticated
  );
  const currentLanguage = useSelector(
    (state) => state.i18Reducer.currentLanguage
  );

  useEffect(() => {
    dispatch(setCurrentLanguage());
    document.body.dir = currentLanguage.dir;
    document.title = t("app_title");
  }, [currentLanguage, t]);

  useEffect(() => {
    isAuthinticated === true && dispatch(getUser());
  }, [isAuthinticated]);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/cart" component={Cart} />
          <Route path="/deals" component={Deals} />
          <Route path="/shop" component={Shop} />
          <Route path="/category/:id" component={Category} />
          <Route path="/orders" component={Orders} />
        </Switch>
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
