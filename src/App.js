import React from "react";
import Layout from "./hoc/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkcout from "./containers/Checkcout/Checkcout";

function App() {
  return (
    <div>
      <Layout>
        <BurgerBuilder />
        <Checkcout />
      </Layout>
    </div>
  );
}

export default App;
