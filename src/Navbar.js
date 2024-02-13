import { useEffect, useState } from "react";

const Navbar = () => {
    const [toggled, setToggled] = useState(false)

    const [theme, setTheme] = useState(false)

    const navToggle = () =>{
        setToggled(!toggled)
    }

    const toggleTheme = () =>{
      setTheme(!theme)
    }

    useEffect(() => {
      if(theme){
        document.body.classList.remove('bg-sky-950')
        document.body.classList.add('bg-emerald-950')
      }else{
        document.body.classList.remove('bg-emerald-950')
        document.body.classList.add('bg-sky-950')
      }
    }, [theme]);
    


  return (
    <>
      <div className={`fixed top-0 w-screen h-16 flex flex-row ${theme?'bg-emerald-900':'bg-sky-900'} text-gray-300 shadow-lg grid grid-cols-3`}>
        <div className="nav-items">
          <p className={`nav-item ${theme?'nav-item-emerald':'nav-item-sky'} flex scale-100 w-auto sm:scale-0 sm:w-0 sm:p-0 transition-all duration-150 ease-linear`} onClick={navToggle}>Menu</p>
          <p className={`nav-item ${theme?'nav-item-emerald':'nav-item-sky'} flex scale-0 w-0 sm:scale-100 sm:w-auto transition-all duration-150 ease-linear`}>Home</p>
          <p className={`nav-item ${theme?'nav-item-emerald':'nav-item-sky'} flex scale-0 w-0 sm:scale-100 sm:w-auto transition-all duration-150 ease-linear`}>Social</p>
          <p className={`nav-item ${theme?'nav-item-emerald':'nav-item-sky'} flex scale-0 w-0 sm:scale-100 sm:w-auto transition-all duration-150 ease-linear`}>About</p>
          <p className={`nav-item ${theme?'nav-item-emerald':'nav-item-sky'} flex scale-0 w-0 sm:scale-100 sm:w-auto transition-all duration-150 ease-linear`}>Contact Us</p>
        </div>
        <div className={`nav-current ${theme?'nav-current-emerald':'nav-current-sky'} scale-0 md:scale-100 md:w-100 transition-all duration-150 ease-linear`}>
          <p className="text-center">welcome</p>
        </div>
        <div className="nav-user">
          <p className={`nav-item ${theme?'nav-item-emerald':'nav-item-sky'} h-full`} onClick={toggleTheme}>Thesura</p>
        </div>
      </div>
      <div className={`${toggled?'scale-100 transition-all duration-150 ease-linear':'scale-0'} fixed sm:hidden top-16 w-auto ${theme?'bg-emerald-950':'bg-sky-950'} text-gray-300 shadow-lg`}>
        <div className="nav-list">
          <p className={`nav-list-item ${theme?'nav-list-item-emerald':'nav-list-item-sky'}`}>Home</p>
          <p className={`nav-list-item ${theme?'nav-list-item-emerald':'nav-list-item-sky'}`}>Social</p>
          <p className={`nav-list-item ${theme?'nav-list-item-emerald':'nav-list-item-sky'}`}>About</p>
          <p className={`nav-list-item ${theme?'nav-list-item-emerald':'nav-list-item-sky'}`}>Contact Us</p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
