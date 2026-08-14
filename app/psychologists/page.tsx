import PsychologistsPageTitle from '@/components/Psychologists/PsychologistsPageTitle/PsychologistsPageTitle';
import FilterBar from '@/components/Psychologists/FilterBar/FilterBar';
import PsychologistsList from '@/components/Psychologists/PsychologistsList/PsychologistsList';
import css from './page.module.css';
import { Suspense } from 'react';

export default function PsychologistsPage() {
  return (
    <section className={css.psychologistsPage} aria-label="Psychologists page">
      <div className="container">
        <PsychologistsPageTitle />
        <Suspense fallback={<div>Loading filters...</div>}>
          <FilterBar />
        </Suspense>
        <PsychologistsList />
      </div>
    </section>
  );
}
