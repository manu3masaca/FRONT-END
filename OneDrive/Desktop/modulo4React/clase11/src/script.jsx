import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import Actividad1 from "./components/actividad1/App";
import Actividad2 from "./components/actividad2/App";
import Actividad3 from "./components/actividad3/App";
import Actividad4 from "./components/actividad4/App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <>
      <Actividad1 />
      <hr />
      <Actividad2 />
      <hr />
      <Actividad3 />
      <hr />
      <Actividad4 />
    </>
  </React.StrictMode>
);