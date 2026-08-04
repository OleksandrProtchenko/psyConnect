'use client';

import { FaHeart } from 'react-icons/fa';
import css from './NavMenu.module.css';
import { useEffect, useState } from 'react';

interface NavMenuProps {
  auth: boolean;
}

export default function NavMenu({ auth }: NavMenuProps) {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const handleClick = (item: string) => {
    setActiveItem(item);
    localStorage.setItem('activeNavItem', item);
  };

  useEffect(() => {
    const getActiveItemFromLocalStorage = () => {
      const activeNavItem = localStorage.getItem('activeNavItem');
      if (activeNavItem) {
        setActiveItem(activeNavItem);
      }
    };
    getActiveItemFromLocalStorage();
  }, []);

  return (
    <ul key="nav-menu" className={css.navMenu}>
      <li
        className={css.navItem}
        onClick={() => handleClick('home')}
        data-active={activeItem === 'home' ? 'true' : 'false'}
      >
        Home
      </li>
      <li
        className={css.navItem}
        onClick={() => handleClick('psychologists')}
        data-active={activeItem === 'psychologists' ? 'true' : 'false'}
      >
        Psychologists
      </li>
      {auth && (
        <li
          className={`${css.navItem} ${css.navItemFavorite}`}
          data-active="false"
        >
          <span className={css.navItemFavoriteText}>Favorites</span> <FaHeart />
        </li>
      )}
    </ul>
  );
}
