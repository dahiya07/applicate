import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import IndexPage from "./component/template/indexPage";
import Layout from "./component/layout/layout";
import CartPage from "./component/template/cartPage";

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/">
            <IndexPage />
          </Route>
          <Route exact path="/cart">
            <CartPage />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
