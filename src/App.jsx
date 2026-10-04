import FormFields from "./components/FormFields";
import UserProviderSample from "./components/UserProvider";

import { ToastContainer } from "react-toastify";
import { Route, Routes, Link } from "react-router-dom";

// import MyProvider from "./provider/UserProvider";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import EditUser from "./screens/EditUser";
import UseMyUserContext from "./hooks/UseUserContext";

function App() {
  const { state } = UseMyUserContext();
  return (
    <div className="flex flex-col items-center m-8 space-y-2">
      {/* <MyProvider> */}
      <div className="w-full bg-teal-100 h-14">
        <div>
          <ul className="flex flex-row justify-evenly">
            <li className="bg-white p-2 m-1">
              <Link to="/">Form UseReducer</Link>
            </li>
            <li className="bg-white p-2 m-1">
              <Link to="/provider">UseReducer Provider</Link>
            </li>
          </ul>
        </div>
      </div>
      <Routes>
        <Route path="/" exact={true} element={<FormFields />} />
        <Route path="/provider" element={<UserProviderSample />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/edituser"
          element={state.user ? <EditUser /> : <FormFields />}
        />
      </Routes>
      {/* </MyProvider> */}
      <ToastContainer />
    </div>
  );
}

export default App;
