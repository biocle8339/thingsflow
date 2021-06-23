import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "../Header";
import Detail from "../Detail";
import List from "../List";
import useFetch from "../../hooks/useFetch";

const OWNER = "angular";
const REPO = "angular-cli";
const PARAM = "issues?state=open&sort=comments";
const options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};

function App() {
  const { response, error } = useFetch(
    `https://api.github.com/repos/${OWNER}/${REPO}/${PARAM}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    },
    options,
  );

  return (
    <div className="App">
      <Header />
      {!!response && (
        <Switch>
          <Route path="detail">
            <Detail />
          </Route>
          <Route path="/">
            <List list={response} />
          </Route>
        </Switch>
      )}
      {!!error && <div>Error</div>}
    </div>
  );
}

export default App;
