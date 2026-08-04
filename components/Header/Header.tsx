import css from './Header.module.css';
import BurgerMenu from './BurgerMenu/BurgerMenu';
import Logo from './Logo/Logo';
import NavMenu from './NavMenu/NavMenu';
import Auth from './Auth/Auth';

export default function Header() {
  const auth = false;
  return (
    <div className={`container ${css.headerContainer}`}>
      <Logo />
      <NavMenu auth={auth} />
      <BurgerMenu desktop={true} />
      <Auth />
    </div>
  );
}
