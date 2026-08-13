import css from './PsychologistsPageTitle.module.css';

export default function PsychologistsTitle() {
  return (
    <div className={css.psychologistsTitleWrapper}>
      <h1 className={css.psychologistsTitle}>Find Your Psychologist</h1>
      <p className={css.psychologistsSubtitle}>
        Browse our verified specialists and find the perfect match for your
        needs.
      </p>
    </div>
  );
}
