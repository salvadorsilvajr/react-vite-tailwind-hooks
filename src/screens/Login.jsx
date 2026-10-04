import { useState, useEffect } from "react";
import UseMyUserContext from "../hooks/UseUserContext";
import Input from "../components/Basicos/Input";
import Buttons from "../components/Basicos/Buttons";
import Msg from "../components/Basicos/Msg";
import { useLogin } from "../hooks/useLogin";
import { useGoogle } from "../hooks/useGoogle";
import { useFacebook } from "../hooks/useFacebook";
import { MdVisibility } from "react-icons/md";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { login, error, isPending } = useLogin();
  const { signinwithgoogle } = useGoogle();
  const { signinwithfacebook } = useFacebook();
  const { state } = UseMyUserContext();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    password: "",
    email: "",
  });

  const { email, password } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        navigate("/");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [error, navigate]);

  const HandlegoogleSignIn = () => {
    signinwithgoogle();
  };
  const HandlefacebookignIn = () => {
    signinwithfacebook();
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <section id="login" className="w-full">
      <p>Log In Componet </p>
      {!state.dataUser ? (
        <p className="text-red-500 font-bold"> not user</p>
      ) : (
        <p>{state.dataUser.displayName}</p>
      )}

      <hr />

      {error && <Msg type="error" msg={error.message} />}
      <div className="grid grid-cols-7 gap-4">
        <div className="col-span-3 col-start-3">
          <form onSubmit={handleOnSubmit}>
            <Input
              onChange={handleChange}
              labelname="Your Email"
              name="email"
              value={formData.email}
              variant="email"
              required
              placeholder="Title o Question Here"
              type="email"
            />
            <Input
              onChange={handleChange}
              labelname="Your Password"
              name="password"
              value={formData.password}
              variant="text"
              required
              placeholder="Add your Password"
              type={showPassword ? "text" : "password"}
            />
            <div className="flex w-full flex-row justify-end mt-2 text-sm">
              <span
                //   href="#"
                onClick={() => setShowPassword((prevState) => !prevState)}
                className="flex justify-end text-sm font-semibold text-secundary hover:text-sec-hover cursor-pointer"
              >
                <MdVisibility
                  style={{
                    marginRight: ".5rem",
                    height: "1.5em",
                    width: "1.5em",
                  }}
                />
                Display password
              </span>
            </div>
            {isPending ? (
              <Buttons
                estilo="full"
                tamano="full"
                name="Loading..."
                background="primary"
                type="submit"
              ></Buttons>
            ) : (
              <Buttons
                estilo="full"
                tamano="full"
                name="Submit"
                background="primary"
                type="submit"
              ></Buttons>
            )}
          </form>

          <div className=" flex justify-center justify-items-center">
            <div onClick={HandlegoogleSignIn} className="mr-2">
              <Buttons
                name=""
                background="SignInMedia"
                Google={true}
                estilo="full"
                tamano="full"
              ></Buttons>
            </div>
            <div onClick={HandlefacebookignIn}>
              <Buttons
                name=""
                background="SignInMedia"
                Face={true}
                estilo="full"
                tamano="full"
              ></Buttons>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
