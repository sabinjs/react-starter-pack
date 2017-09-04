import * as React from "react";
import * as ReactDOM from "react-dom";
import Time from "./component/Time";
// import { AppContainer } from "react-hot-loader";

// declare var module:any;

ReactDOM.render(
  <Time name="GOT" />,
  document.getElementById("root")
);

// function renderRoot(Component: any) {
//   ReactDOM.render(
//     // <AppContainer>
//       <Component name="birbajracharya" />,
//     // </AppContainer>,
//     document.getElementById("root")
//   );
// }
// renderRoot(Hello);

// if(module.hot) {
//   module.hot.accept("./Hello", function() {
//     renderRoot("HOME");
//   });
// }

// import('Hello').then((module) => {

// });
// console.log("sabin bir bajracharya");
// console.log("sabin module", module.hot);
// if (module.hot) {
//   module.hot.accept('Hello', () => {
//     console.log("sabin", "Hot render accept");
//     renderRoot(Hello);
//   });
// }
