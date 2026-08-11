import css from './Home.module.css';
import Hero from './Hero/Hero';
import Stats from './Stats/Stats';

export default function Home() {
  return (
    <div className={css.homeWrapper}>
      <Hero />
      <Stats />
    </div>
  );
}
