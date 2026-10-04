import React from "react";
import Pic from "../../../src/assets/pic.png";

const imagenes = ({
  src,
  alt = "Image",
  className = "",
  hover = false,
  tamano = "prof",
  estilo = "profile",
}) => {
  const baseStyles = "";

  const hoverStyles = hover ? "hover:bg-primary/50" : "";

  const tamanos = {
    prof: "w-8 h-8  md:w-10 md:h-10 lg:h-12 lg:w-12  xl:w-14 xl:h-14",
    // land: "max-w-xl mx-auto  overflow-hidden rounded-lg shadow-md",
    land: "relative my-auto max-h-[15em] sm:max-h-[18em] md:max-h-[21em] lg:max-h-[24em] xl:max-h-[27em]  aspect-3/2 overflow-hidden rounded-lg",
    // port: "max-w-xs  mx-auto overflow-hidden rounded-lg shadow-lg",
    port: "relative  max-w-[10em] sm:max-w-[15em] md:max-w-[20em] lg:max-w-[25em] xl:max-w-[30em]  aspect-[3/4] overflow-hidden rounded-lg",
    squa: "w-18 h-18  md:w-20 md:h-20 lg:h-22 lg:w-22  xl:w-24 xl:h-24 aspect-square ",

    full: "",
  };
  const estilos = {
    profile: " aspect-square rounded-full object-cover",
    // landscape: "w-full aspect-3/2 object-cover",
    landscape: "absolute inset-0 w-full h-full object-cover",
    // portrait: "w-full aspect-3/4 object-cover  ",
    portrait: "absolute inset-0 w-full h-full object-cover",
    square: "w-full h-full object-cove rounded-lg",
    full: "absolute inset-0 w-full h-full object-cover",
  };

  return (
    <div
      className={`${baseStyles}  ${hoverStyles}  ${tamanos[tamano]} ${className}`}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          className={`w-full h-full  ${estilos[estilo]} ${className}`}
        />
      ) : (
        <img
          src={Pic}
          alt={alt}
          className={`w-full h-full  ${estilos[estilo]} ${className}`}
        />
      )}
    </div>
  );
};

export default imagenes;
