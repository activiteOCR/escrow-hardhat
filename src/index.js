// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import "./build/index.css"; // Adjust the path as per your build output location
// //import './index.css';
// import reportWebVitals from "./reportWebVitals";

// const root = ReactDOM.createRoot(document.getElementById("root"));

// if (!window.ethereum) {
//   root.render(
//     <React.StrictMode>
//       You need to install a browser wallet to build the escrow dapp
//     </React.StrictMode>
//   );
// } else {
//   root.render(
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   );
// }

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./build/index.css"; // Ensure this path is correct based on where your CSS file is built
import reportWebVitals from "./reportWebVitals";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

function renderApp() {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

function renderNoWallet() {
  root.render(
    <React.StrictMode>
      <div style={{ padding: 20, textAlign: "center", fontSize: "1.5em" }}>
        You need to install a browser wallet (like MetaMask) to use the Escrow
        DApp.
      </div>
    </React.StrictMode>
  );
}

// Check for Ethereum provider
if (window.ethereum) {
  renderApp();
} else {
  renderNoWallet();
}

// Web vitals can help track performance issues
reportWebVitals(console.log); // This will log web vitals, you can remove or comment this in production
