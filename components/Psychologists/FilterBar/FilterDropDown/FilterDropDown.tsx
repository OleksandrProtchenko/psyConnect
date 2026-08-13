'use client';

import { useState } from 'react';
import css from './FilterDropDown.module.css';

interface FilterDropDownProps {
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
}

export default function FilterDropDown({
  label,
  options,
  value,
  onChange,
}: FilterDropDownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option: string) => {
    onChange(option === value ? '' : option); // повторный клик — сброс
    setIsOpen(false);
  };

  return (
    <div className={css.dropdown}>
      <button
        type="button"
        className={css.dropdownToggle}
        onClick={() => setIsOpen(prev => !prev)}
      >
        {value || label}
      </button>

      {isOpen && (
        <ul className={css.dropdownList}>
          {options.map(option => (
            <li key={option}>
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
