import * as React from "react";
import { render } from "react-dom";
import SimpleMainComponent from "./SimpleMainComponent";
import MainComponent from "./MainComponent";
import { BrowserRouter } from "react-router-dom";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    simple - <SimpleMainComponent />
    main -
    <MainComponent />
  </div>
);

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
