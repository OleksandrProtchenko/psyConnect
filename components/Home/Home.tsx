import css from './Home.module.css';
import Hero from './Hero/Hero';
import Stats from './Stats/Stats';

export default function Home() {
  return (
    <section className={css.homeWrapper} aria-label="Home page">
      <Hero />
      <Stats />
    </section>
  );
}
