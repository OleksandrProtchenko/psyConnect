'use client';

import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { FaFilter } from 'react-icons/fa';
import FilterDropDown from './FilterDropDown/FilterDropDown';
import css from './FilterBar.module.css';
import {
  specializations,
  approaches,
} from '@/types/psychologists/psychologists';
import { useQueryClient } from '@tanstack/react-query';
import { Icon } from '@/components/ui/Icon/Icon';

const PRICE_OPTIONS = ['50', '100'];

export default function FilterBar() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const queryClient = useQueryClient();

  const navigateWithReset = (url: string) => {
    queryClient.removeQueries({
      queryKey: ['psychologists'],
    });

    router.push(url);
  };

  const updateFilter = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value === 'All') {
      params.delete(key);
    } else if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }

    navigateWithReset(`${pathname}?${params.toString()}`);
  };

  const clearFilters = () => {
    navigateWithReset(pathname);
  };

  const hasActiveFilters = ['specialization', 'approach', 'price_max'].some(
    key => Boolean(searchParams.get(key))
  );

  return (
    <div className={css.filterBarWrapper}>
      <div className={css.filterBarTitle}>
        <Icon className={css.filterIcon} name="filters" />
        <span>Filters</span>
      </div>

      <div className={css.filterControls}>
        <FilterDropDown
          label="Specialization"
          options={specializations}
          value={searchParams.get('specialization') ?? ''}
          onChange={value => updateFilter('specialization', value)}
        />
        <FilterDropDown
          label="Therapeutic Approach"
          options={approaches}
          value={searchParams.get('approach') ?? ''}
          onChange={value => updateFilter('approach', value)}
        />
        <FilterDropDown
          label="Price per Session"
          options={PRICE_OPTIONS}
          value={searchParams.get('price_max') ?? ''}
          onChange={value => updateFilter('price_max', value)}
        />
      </div>

      {hasActiveFilters && (
        <button
          type="button"
          onClick={clearFilters}
          className={css.filterClearBtn}
        >
          Clear Filters
        </button>
      )}
    </div>
  );
}
