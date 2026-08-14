'use client';

import { useState } from 'react';
import css from './FilterDropDown.module.css';
import { Icon } from '@/components/ui/Icon/Icon';

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
    <div className={css.dropdownWrapper}>
      <button
        type="button"
        className={css.dropdownToggleBtn}
        onClick={() => setIsOpen(prev => !prev)}
        aria-expanded={isOpen}
      >
        {value || label} <Icon className={css.dropdownIcon} name="arrow" />
      </button>

      {isOpen && (
        <div className={css.dropdownList}>
          <ul className={css.dropdownScroll}>
            <li
              className={`${css.dropdownItem} ${
                value === '' ? css.selectedItem : ''
              }`}
              onClick={() => handleSelect('' as T)}
            >
              <span>All</span>

              {value === '' && (
                <Icon
                  name="select-item"
                  className={css.checkmark}
                  aria-hidden="true"
                />
              )}
            </li>

            {options.map(option => {
              const isSelected = option === value;

              return (
                <li
                  className={`${css.dropdownItem} ${
                    isSelected ? css.selectedItem : ''
                  }`}
                  key={option}
                  onClick={() => handleSelect(option)}
                >
                  <span>{option}</span>

                  {isSelected && (
                    <Icon
                      name="select-item"
                      className={css.checkmark}
                      aria-hidden="true"
                    />
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
