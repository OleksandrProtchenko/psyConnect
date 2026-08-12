import css from './Stats.module.css';

export default function Stats() {
  return (
    <div className={css.heroStatsWrapper}>
      <div className={`container ${css.heroStatsContainer}`}>
        <ul className={css.heroStatsList}>
          <li className={css.heroStatsItem}>
            <h2 className={css.heroStatsItemTitle}>120+</h2>
            <p className={css.heroStatsItemDescription}>
              verifiend specialists
            </p>
          </li>
          <li className={css.heroStatsItem}>
            <h2 className={css.heroStatsItemTitle}>5,000+</h2>
            <p className={css.heroStatsItemDescription}>happy clients</p>
          </li>
          <li className={css.heroStatsItem}>
            <h2 className={css.heroStatsItemTitle}>10+</h2>
            <p className={css.heroStatsItemDescription}>years of experience</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
