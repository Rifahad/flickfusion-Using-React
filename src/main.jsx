import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Store from "./Redux/Store";
import { Provider } from "react-redux";
import { UserDetailsProvider } from './Context/UserContext.jsx';


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={Store}>
      <UserDetailsProvider>
      <App />
      </UserDetailsProvider>
    </Provider>
  </React.StrictMode>
);
