import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
// import { AuthContextProvider } from "./context/AuthContext";
import MyProvider from "./provider/UserProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      {/* <AuthContextProvider> */}
      <MyProvider>
        <App />
      </MyProvider>
      {/* </AuthContextProvider> */}
    </BrowserRouter>
  </StrictMode>,
);
