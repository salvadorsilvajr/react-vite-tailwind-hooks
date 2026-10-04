import React from "react";
import { FaGooglePlusG } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
const Buttons = ({
  name = "Enter",
  className = "",
  background = "default",
  hover = true,
  tamano = "small",
  estilo = "clasico",
  Google,
  Face,
}) => {
  const baseStyles = "flex justify-center mx-auto cursor-pointer";
  const backgrounds = {
    default: "bg-inherit",
    white: "bg-white",
    primary: "bg-primary ",
    secundary: "bg-secundary ",
    danger: "bg-danger",
    warning: "bg-warning",
    dark: "bg-gray-600 border-2 border-cyan-100 border-double ",
    SignInMedia:
      " flex w-full justify-center rounded-md bg-blue-400 mr-3 mt-2 text-sm/6 font-semibold text-white shadow-xs hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secundary ",
  };

  const hoverStyles = hover ? "hover:bg-primary/50" : "";

  const tamanos = {
    small: "w-[3.5em] md:w-[3.8em] lg:w-[4.4em] xl:w-[5em]  p-[.2em] ",
    medium: "w-[4.5em] md:w-[4.8em] lg:w-[5.4em] xl:w-[6em] p-[.2em]",
    large: "w-[6.5em] md:w-[6.8em] lg:w-[7.4em] xl:w-[8em] p-[.2em]",
    full: "w-full mr-2 px-1 py-1",
  };
  const estilos = {
    clasico: "rounded-md",
    underline: "border-b-3 border-double ",
    outline: "outline-double  rounded-md ",
    full: "w-full",
  };

  return (
    <button
      className={`${baseStyles} ${backgrounds[background]} ${hoverStyles} ${estilos[estilo]} ${tamanos[tamano]} ${className}`}
    >
      {name}
      {Google && (
        <>
          <span>
            <FaGooglePlusG color="#d50f25" size={"3rem"} />
          </span>
          <p className="ml-3 text-xs text-amber-400 md:text-2xl">
            {" "}
            Sign in with Google
          </p>
        </>
      )}
      {Face && (
        <>
          <span>
            <FaFacebookSquare color="#fff" size={"3rem"} />
          </span>
          <p className="ml-3 text-xs text-white md:text-2xl">
            {" "}
            Sign in with Facebook
          </p>
        </>
      )}
    </button>
  );
};

export default Buttons;
