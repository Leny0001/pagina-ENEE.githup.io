import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import Logo from '../../img/logo.png';
import {
  AiOutlineUser,
  AiOutlineSearch,
  AiOutlineMenu,
  AiOutlineClose,
} from 'react-icons/ai';

const NavbarT = () => {
  const [nav, setNav] = useState(false);

  return (
    <header className={styles.navbar}>
      <img className={styles.logo} src={Logo} alt='logo' />
      <nav>
        <ul className={nav ? [styles.menu, styles.active].join(' ') : [styles.menu]} >
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
          <Link to='/noticias'>Noticias</Link>
          </li>
          <li>
            <a href='/archivo'>Archivos</a>
          </li>
          <li>
            <AiOutlineSearch size={25} style={{ marginTop: '6px' }} />
          </li>
          <li>
            <AiOutlineUser size={25} style={{ marginTop: '6px' }} />
          </li>
        </ul>
      </nav>
      <div onClick={()=> setNav(!nav)} className={styles.mobile_btn}>
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        
      </div>
    </header>
  );
};

export default NavbarT;
