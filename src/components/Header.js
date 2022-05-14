import logo from '../assets/img/logo.png';
import searchIcon from '../assets/icon/search.png';
import themeSwitchIcon from '../assets/icon/theme-switch.png';
import '../css/header.css';

const Header = () => {
  return (
    <div className="header">
      <section className="logo-container">
        <img src={logo} alt="logo" className="logo" />
      </section>

      <section className="searchBar">
        <section className="searchIconContainer">
          <img src={searchIcon} alt="search icon" />
        </section>

        <input
          type="text"
          className="searchInput"
          placeholder="collections, items or users"
        />
      </section>

      <nav className="navLinks">
        <ul>
          <li>Drops</li>
          <li>Marketplace</li>
          <li>Create</li>
        </ul>
      </nav>

      <section className="headerActions">
        <section className="themeSwitchContainer">
          <img src={themeSwitchIcon} alt="theme switch" />
        </section>

        <button className="loginButton">GET IN</button>
      </section>
    </div>
  );
};

export default Header;
