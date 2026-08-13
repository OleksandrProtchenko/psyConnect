import PsychologistsPageTitle from '@/components/Psychologists/PsychologistsPageTitle/PsychologistsPageTitle';
import FilterBar from '@/components/Psychologists/FilterBar/FilterBar';
import PsychologistsList from '@/components/Psychologists/PsychologistsList/PsychologistsList';
import css from './page.module.css';

export default function PsychologistsPage() {
  return (
    <section className={css.psychologistsPage} aria-label="Psychologists page">
      <div className="container">
        <PsychologistsPageTitle />
        <FilterBar />
        <PsychologistsList />
      </div>
    </section>
  );
}
