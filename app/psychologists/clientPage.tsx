'use client';

import css from './page.module.css';
import PsychologistsPageTitle from '@/components/Psychologists/PsychologistsPageTitle/PsychologistsPageTitle';
import FilterBar from '@/components/Psychologists/FilterBar/FilterBar';
import PsychologistsList from '@/components/Psychologists/PsychologistsList/PsychologistsList';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';
import { getPsychologists } from '@/lib/api/psychologists/api';

export default function ClientPage() {
  const searchParams = useSearchParams();

  const limit = Number(searchParams.get('limit') ?? 4);
  const specialization = searchParams.get('specialization') ?? undefined;
  const approach = searchParams.get('approach') ?? undefined;

  const priceMaxValue = searchParams.get('price_max');
  const priceMax = priceMaxValue ? Number(priceMaxValue) : undefined;

  const filters = {
    specialization,
    approach,
    priceMax,
    limit,
  };

  const {
    data,
    isLoading,
    isError,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ['psychologists', filters],

    queryFn: ({ pageParam }) =>
      getPsychologists({
        specialization,
        approach,
        priceMax,
        page: pageParam,
        limit,
      }),

    initialPageParam: 1,

    getNextPageParam: (lastPage, allPages) => {
      const loadedItems = allPages.reduce(
        (total, page) => total + page.items.length,
        0
      );

      return loadedItems < lastPage.total ? lastPage.page + 1 : undefined;
    },

    gcTime: 0,
  });

  if (isLoading) {
    return <div>Loading psychologists...</div>;
  }

  if (isError) {
    return <div>Failed to load psychologists.</div>;
  }

  const psychologists = data?.pages.flatMap(page => page.items) ?? [];

  return (
    <section className={css.psychologistsPage} aria-label="Psychologists page">
      <div className="container">
        <PsychologistsPageTitle />
        <FilterBar />
        <PsychologistsList
          data={{
            items: psychologists,
            total: data?.pages[0]?.total ?? 0,
            page: data?.pages[data.pages.length - 1]?.page ?? 1,
            limit,
          }}
        />
        {hasNextPage && (
          <>
            {isFetchingNextPage ? (
              <span className={css.loader}></span>
            ) : (
              <button
                className={css.loadMoreBtn}
                type="button"
                onClick={() => fetchNextPage()}
                disabled={isFetchingNextPage}
              >
                Load more psychologists
              </button>
            )}
          </>
        )}
        {!hasNextPage && (
          <span className={css.loadedAllSpecialists}>
            You&apos;ve seen all specialists.
          </span>
        )}
      </div>
    </section>
  );
}
