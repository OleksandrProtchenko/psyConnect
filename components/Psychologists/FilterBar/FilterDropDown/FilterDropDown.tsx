'use client';

import { useState } from 'react';
import css from './FilterDropDown.module.css';

interface FilterDropDownProps<T extends string> {
  label: string;
  options: readonly T[];
  value: T | '';
  onChange: (value: T | '') => void;
}

export default function FilterDropDown<T extends string>({
  label,
  options,
  value,
  onChange,
}: FilterDropDownProps<T>) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option: T) => {
    onChange(option === value ? '' : option);
    setIsOpen(false);
  };

  return (
    <div className={css.dropdown}>
      <button
        type="button"
        className={css.dropdownToggle}
        onClick={() => setIsOpen(prev => !prev)}
        aria-expanded={isOpen}
      >
        {value || label}
      </button>

      {isOpen && (
        <ul className={css.dropdownList}>
          {options.map(option => (
            <li className={css.dropdownItem} key={option}>
              <button type="button" onClick={() => handleSelect(option)}>
                {option}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
