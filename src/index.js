import React from "react";
import ReactDOM from "react-dom";

function Home() {
  return (
    <div>
      <h1>Home!</h1>
    </div>
  );
}

function App() {
  return <Home />;
}

ReactDOM.render(<App />, document.getElementById("root"));


// import React from "react";
// import ReactDOM from "react-dom";
// import {BrowserRouter} from "react-router-dom";
// import App from "./App";


// ReactDOM.render(
//   <BrowserRouter>
//   <App />
//   </BrowserRouter>,
//   document.getElementById("root")
// );