import './Navbar.css';

const Navbar = ({ burgerActive, handleToggleClick }) => {
  return (
    <nav className={burgerActive ? 'nav-active' : ''}>
      <ul className={burgerActive ? 'menu active' : 'menu'}>
        <li className='logo'>
          <a href='/'>
            <span className='grey-angle'>&lt;&nbsp;</span>
            <span className='logo-lead'>Digi</span>Brady
            <span className='grey-angle'>&nbsp;/&gt;</span>
          </a>
        </li>
        <li className='item'>
          <a href='#FullStackDev'>FullStackDev</a>
        </li>
        <li className='item'>
          <a href='#CloudSolns'>Cloud</a>
        </li>
        <li className='item'>
          <a href='#DevOps'>DevOps</a>
        </li>
        <li className='item'>
          <a href='#certs'>Certifications</a>
        </li>
        <li className='item'>
          <a href='#contact'>Contact</a>
        </li>
        <li className='toggle'>
          <a href='/' onClick={(event) => handleToggleClick(event)}>
            {burgerActive ? (
              <i className='fas fa-times'></i>
            ) : (
              <i className='fas fa-bars'></i>
            )}
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
