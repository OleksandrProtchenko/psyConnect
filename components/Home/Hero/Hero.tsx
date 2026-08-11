import css from './Hero.module.css';

export default function Hero() {
  return (
    <div className={css.heroWrapper}>
      <div className="container">
        <div className={css.heroContent}></div>
        <div className={css.heroImageWrapper}></div>
      </div>
    </div>
  );
}
