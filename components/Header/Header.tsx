import css from './Header.module.css';

import BurgerMenu from './BurgerMenu/BurgerMenu';
import Logo from './Logo/Logo';
import Auth from './Auth/Auth';

export default function Header() {
  return (
    <div className={`container ${css.headerContainer}`}>
      <Logo />
      <BurgerMenu />
      <Auth />
    </div>
  );
}
