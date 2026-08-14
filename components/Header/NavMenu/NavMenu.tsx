'use client';

import { FaHeart } from 'react-icons/fa';
import css from './NavMenu.module.css';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface NavMenuProps {
  auth: boolean;
}

export default function NavMenu({ auth }: NavMenuProps) {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const router = useRouter();

  const handleClick = (item: string) => {
    setActiveItem(item);
    router.push(`/${item === 'home' ? '' : item}`);
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
          onClick={() => handleClick('favorites')}
          data-active={activeItem === 'favorites' ? 'true' : 'false'}
        >
          <span className={css.navItemFavoriteText}>Favorites</span> <FaHeart />
        </li>
      )}
    </ul>
  );
}
