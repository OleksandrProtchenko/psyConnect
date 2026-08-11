import css from './Footer.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '../ui/Icon/Icon';
export default function Footer() {
  return (
    <div className={css.footerWrapper}>
      <div className={`container ${css.footerContainer}`}>
        <div className={css.logoWrapper}>
          <Link className={css.logoLink} href="/">
            <Image
              className={css.logoImage}
              src="/Logo.png"
              alt="Logo"
              width={122}
              height={24}
              loading="eager"
            />
          </Link>
        </div>
        <div className={css.copyrightWrapper}>
          <p className={css.copyrightText}>
            © 2026 PsyConnect. All rights reserved.
          </p>
        </div>
        <div className={css.socialWrapper}>
          <ul className={css.socialList}>
            <li className={css.socialItem}>
              <Link
                className={css.socialLink}
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon className={css.socialIcon} name="instagram" />
              </Link>
            </li>
            <li className={css.socialItem}>
              <Link
                className={css.socialLink}
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon className={css.socialIcon} name="facebook" />
              </Link>
            </li>
            <li className={css.socialItem}>
              <Link
                className={css.socialLink}
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon className={css.socialIcon} name="linkedin" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
