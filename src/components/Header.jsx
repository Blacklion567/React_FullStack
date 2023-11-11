import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className=' border border-bottom '>
        <div className=' d-flex flex-column flex-md-row justify-content-between align-items-center p-3 px'>
          <h5 className=' my-2 my-md-0 mx-md-3 fs-3'>Company name</h5>
          <nav className=' my-2 my-md-0 mx-md-3'>
            <NavLink
              className='p-2 text-decoration-none' to="/"
            >Home</NavLink>-
            <NavLink className='p-2 text-dark text-decoration-none' to='/Posts'>Posts</NavLink>-
            <NavLink className='p-2 text-dark text-decoration-none' to={{
              pathname: '/Profile',
              hash: '#profile',
              search: '?true=enabled',
            }} >Profile</NavLink>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
