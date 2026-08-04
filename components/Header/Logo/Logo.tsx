import Image from 'next/image';
import Link from 'next/link';
import css from './Logo.module.css';

export default function Logo() {
  return (
    <div className={css.logo}>
      <Link className={css.logoLink} href="/">
        <Image
          className={css.logoImage}
          src="/Logo.png"
          alt="Logo"
          width={174}
          height={32}
        />
      </Link>
    </div>
  );
}
