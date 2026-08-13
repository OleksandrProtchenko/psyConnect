'use client';

import css from './BurgerMenu.module.css';

export default function BurgerMenu() {
  const handleClick = () => {
    const iconBurger = document.querySelector(`.${css.burger}`);
    if (iconBurger) {
      const isActive = iconBurger.getAttribute('data-active') === 'true';
      iconBurger.setAttribute('data-active', (!isActive).toString());
    }
  };

  return (
    <button
      className={css.burgerWrapper}
      type="button"
      onClick={handleClick}
      aria-label="Toggle menu"
    >
      <span className={css.burger} data-active="false"></span>
    </button>
  );
}
