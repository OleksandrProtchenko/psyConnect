'use client';

import css from './Header.module.css';
import BurgerMenu from './BurgerMenu/BurgerMenu';
import Logo from './Logo/Logo';
import NavMenu from './NavMenu/NavMenu';
import Auth from './Auth/Auth';
import { useMediaQuery } from 'react-responsive';

export default function Header() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1024px)',
  });
  const auth = true;
  return (
    <div className={`container ${css.headerContainer}`}>
      <Logo />
      {isDesktopOrLaptop && <NavMenu auth={auth} />}
      {!isDesktopOrLaptop && <BurgerMenu />}
      {isDesktopOrLaptop && <Auth />}
    </div>
  );
}
