import React from "react";

const NavBar = ({ setNavBar, navBar }) => {
  return (
    <div>
      {navBar !== "C" ? (
        <button onClick={() => setNavBar("C")}>Characters</button>
      ) : (
        <button className="disabled">Characters</button>
      )}
      {navBar !== "E" ? (
        <button onClick={() => setNavBar("E")}>Episodes</button>
      ) : (
        <button className="disabled">Episodes</button>
      )}
      {navBar !== "L" ? (
        <button onClick={() => setNavBar("L")}>Locations</button>
      ) : (
        <button className="disabled">Locations</button>
      )}
    </div>
  );
};

export default NavBar;
