import { useState } from "react";
import Fonts from "../components/Basicos/Fonts";
import Buttons from "../components/Basicos/Buttons";
import HamburgerMenu from "../components/Basicos/HamburgerMenu";

const Main = () => {
  return (
    <>
      <div className="min-h-32 bg-linear-to-r/longer from-primary/30 to-secundary/10">
        <HamburgerMenu />

        <Fonts tamano="title" color="primary">
          Main Page
        </Fonts>
        <hr />
      </div>
      <div className="max-w-7xl mx-auto ">
        <div className="grid min-h-screen lg:grid-cols-[250px_1fr_250px] ">
          {/* <!-- Left Sidebar (Adjust size by changing 250px) --> */}
          <aside className="bg-gray-100 p-4 h-fit">Left Sidebar </aside>

          {/* <!-- Main Center Area (Takes up remaining space) --> */}
          <main className="bg-white p-4 min-h-svh"></main>

          {/* <!-- Right Sidebar (Adjust size by changing 300px) --> */}
          <aside className="bg-gray-100 p-4 h-fit">Right Sidebar</aside>
        </div>
      </div>
    </>
  );
};

export default Main;
