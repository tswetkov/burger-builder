import React from "react";
import { Route, Switch } from "react-router-dom";

import Layout from "./hoc/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkcout from "./containers/Checkcout/Checkcout";
import Orders from "./containers/Orders/Orders";
import Auth from "./containers/Auth/Auth";
import Logout from "./containers/Auth/Logout/Logout";

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/checkout" component={Checkcout} />
          <Route path="/orders" component={Orders} />
          <Route path="/auth" component={Auth} />
          <Route exact path="/logout" component={Logout} />
          <Route exact path="/" component={BurgerBuilder} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
