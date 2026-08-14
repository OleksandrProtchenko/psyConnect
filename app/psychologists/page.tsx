import { getPsychologists } from '@/lib/api/psychologists/api';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import ClientPage from './clientPage';
import { Suspense } from 'react';

interface PsychologistsPageProps {
  searchParams: Promise<{
    specialization?: string;
    approach?: string;
    price_max?: string;
    limit?: string;
  }>;
}

export default async function PsychologistsPage({
  searchParams,
}: PsychologistsPageProps) {
  const params = await searchParams;
  const limit = Number(params.limit ?? 4);

  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery({
    queryKey: [
      'psychologists',
      {
        specialization: params.specialization,
        approach: params.approach,
        priceMax: params.price_max ? Number(params.price_max) : undefined,
        limit,
      },
    ],
    queryFn: ({ pageParam }) =>
      getPsychologists({
        specialization: params.specialization,
        approach: params.approach,
        priceMax: params.price_max ? Number(params.price_max) : undefined,
        page: pageParam,
        limit,
      }),
    initialPageParam: 1,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense fallback={<div>Loading psychologists...</div>}>
        <ClientPage />
      </Suspense>
    </HydrationBoundary>
  );
}
