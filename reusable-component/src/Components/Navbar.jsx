const Navbar = ({
  navlink1,
  navlink2,
  navlink3,
  navlink4,
  nav1,
  nav2,
  nav3,
  nav4,
}) => {
  return (
    <div className="navbar-container">
      <nav>
        <ul>
          <li>
            <a href={navlink1}>{nav1}</a>
          </li>
          <li>
            <a href={navlink2}>{nav2}</a>
          </li>
          <li>
            <a href={navlink3}>{nav3}</a>
          </li>
          <li>
            <a href={navlink4}>{nav4}</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Navbar;
