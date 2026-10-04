import { toast } from "react-toastify";
import UseMyUserContext from "../hooks/UseUserContext";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { updateDoc, doc, db } from "../firebase/config";
import { useLogout } from "../hooks/useLogout";
import Imagenes from "./Basicos/Imagenes";

export default function FormProvider() {
  const { state } = UseMyUserContext();
  const navigate = useNavigate();
  const { logout } = useLogout();

  const { authIsReady } = state;
  console.log(state);

  const logoutUser = async (e) => {
    e.preventDefault();
    navigate("/");
    // update online status
    await updateDoc(doc(db, "UsersTestCss", state.user.uid), {
      online: false,
    });
    localStorage.removeItem("data");
    logout();
    window.location.reload();
  };

  return (
    <>
      {authIsReady && (
        <div className="flex min-h-full flex-col justify-center px-6 py-8 md:py-0">
          <div className="h-14 w-full text-white bg-black text-center pt-3 mb-5">
            useReducer with create-contec, use-contex and Provider
          </div>
          <div className="flex flex-row">
            <span>user Status: </span>
            {!state.user ? (
              <p className="text-red-500 font-bold"> not user</p>
            ) : (
              <Imagenes src={state.dataUser.photoURL} alt="" className="m-1">
                {/* {state.user.displayName} */}
              </Imagenes>
            )}
          </div>
          <div className="flex flex-row justify-evenly ">
            {!state.user ? (
              <button className="bg-yellow-100 m-2 p-2 rounded-lg cursor-pointer">
                <Link to="/login">Login</Link>
              </button>
            ) : (
              <button
                onClick={logoutUser}
                className="bg-yellow-100 m-2 p-2 rounded-lg cursor-pointer"
              >
                Logout
              </button>
            )}

            <button className="bg-yellow-100 m-2 p-2 rounded-lg cursor-pointer">
              <Link to="/Signup">Create Account</Link>
            </button>
            {state.user && (
              <button className="bg-yellow-100 m-2 p-2 rounded-lg cursor-pointer">
                <Link to="/edituser">Edit Profile</Link>
              </button>
            )}
            {/* <button className="bg-yellow-100 m-2 p-2 rounded-lg cursor-pointer">
              <Link to="/edituser">Edit Profile</Link>
            </button> */}
          </div>
          <hr />
          <div>
            <Outlet />
          </div>
        </div>
      )}
    </>
  );
}
