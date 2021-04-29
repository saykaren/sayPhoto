import React from "react";

const NavBar = ({ setNavBar, navBar }) => {
  return (
    <div>
      {navBar !== "C" && (
        <button onClick={() => setNavBar("C")}>Characters</button>
      )}
      {navBar !== "E" && (
        <button onClick={() => setNavBar("E")}>Episodes</button>
      )}
      {navBar !== "L" && (
        <button onClick={() => setNavBar("L")}>Locations</button>
      )}
    </div>
  );
};

export default NavBar;
