import { NavLink } from "react-router-dom";


const Header = () => {
  return (
    <>
      <header className=" border-bottom shadow">
        <div className="d-flex justify-content-around align-content-center">
          <h1>React Router</h1>
          <nav className="">
            <NavLink className="p-2  text-black " to="/">CSSTransition</NavLink>
            <NavLink className="p-2  text-black " to="/TGroup">TGroup</NavLink>
            <NavLink className="p-2  text-black " to="/Transitions">Transitions</NavLink>
          </nav>
        </div>
      </header>
    </>

  );
};

export default Header;
