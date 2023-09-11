import { useState } from "react";

const Navbar = () => {
    const [toggled, setToggled] = useState(false)

    const navToggle = () =>{
        setToggled(!toggled)
    }

  return (
    <>
      <div className="fixed top-0 w-screen h-16 flex flex-row bg-sky-900 text-gray-300 shadow-lg columns-3">
        <div className="nav-items">
          <p className="nav-item flex scale-100 w-auto sm:scale-0 sm:w-0 sm:p-0 transition-all duration-150 ease-linear" onClick={navToggle}>Menu</p>
          <p className="nav-item flex scale-0 w-0 sm:scale-100 sm:w-auto transition-all duration-150 ease-linear">Home</p>
          <p className="nav-item flex scale-0 w-0 sm:scale-100 sm:w-auto transition-all duration-150 ease-linear">Social</p>
          <p className="nav-item flex scale-0 w-0 sm:scale-100 sm:w-auto transition-all duration-150 ease-linear">About</p>
          <p className="nav-item flex scale-0 w-0 sm:scale-100 sm:w-auto transition-all duration-150 ease-linear">Contact Us</p>
        </div>
        <div className="nav-current scale-0 md:scale-100 md:w-100 transition-all duration-150 ease-linear">
          <p>welcome</p>
        </div>
        <div className="nav-user">
          <p className="nav-item h-full">Thesura</p>
        </div>
      </div>
      <div className={`${toggled?'scale-100 transition-all duration-150 ease-linear':'scale-0'} fixed sm:hidden top-16 w-auto bg-sky-900 text-gray-300 shadow-lg`}>
        <div className="nav-list">
          <p className="nav-list-item">Home</p>
          <p className="nav-list-item">Social</p>
          <p className="nav-list-item">About</p>
          <p className="nav-list-item">Contact Us</p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
