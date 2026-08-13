'use client';

import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { FaFilter } from 'react-icons/fa';
import FilterDropDown from './FilterDropDown/FilterDropDown';
import css from './FilterBar.module.css';

const SPECIALIZATION_OPTIONS = ['Anxiety', 'Depression', 'Relationships'];
const APPROACH_OPTIONS = ['CBT', 'Psychoanalysis', 'Gestalt'];
const PRICE_OPTIONS = ['50', '100', '150'];

export default function FilterBar() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const updateFilter = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    params.set('page', '1'); // сброс пагинации при смене фильтра

    router.push(`${pathname}?${params.toString()}`);
  };

  const clearFilters = () => {
    router.push(pathname); // без query-параметров вообще
  };

  const hasActiveFilters = ['specialization', 'approach', 'price_max'].some(
    key => Boolean(searchParams.get(key))
  );

  return (
    <div className={css.filterBar}>
      <div className={css.filterTitle}>
        <FaFilter />
        <span>Filters</span>
      </div>

      <FilterDropDown
        label="Specialization"
        options={SPECIALIZATION_OPTIONS}
        value={searchParams.get('specialization') ?? ''}
        onChange={value => updateFilter('specialization', value)}
      />
      <FilterDropDown
        label="Therapeutic Approach"
        options={APPROACH_OPTIONS}
        value={searchParams.get('approach') ?? ''}
        onChange={value => updateFilter('approach', value)}
      />
      <FilterDropDown
        label="Price per Session"
        options={PRICE_OPTIONS}
        value={searchParams.get('price_max') ?? ''}
        onChange={value => updateFilter('price_max', value)}
      />

      {hasActiveFilters && (
        <button
          type="button"
          onClick={clearFilters}
          className={css.clearButton}
        >
          Clear Filters
        </button>
      )}
    </div>
  );
}
