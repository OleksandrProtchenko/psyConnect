'use client';

import { Icon } from '@/components/ui/Icon/Icon';
import Image from 'next/image';
import { AppButton } from '@/components/ui/Button/Button';
import css from './Hero.module.css';
import { useRouter } from 'next/navigation';

export default function Hero() {
  const router = useRouter();
  const handleGetStartedClick = () => {
    router.push('/psychologists');
  };
  return (
    <div className={css.heroWrapper}>
      <div className={`container ${css.heroContainer}`}>
        <div className={css.heroContent}>
          <div className={css.heroTag}>
            <Icon className={css.heroTagIcon} name="hero-tag" />
            <p className={css.heroTagText}>your mental health matters</p>
          </div>
          <h1 className={css.heroTitle}>
            Find Your Perfect Psychologist Online
          </h1>
          <p className={css.heroDescription}>
            Connect with licensed therapists and coaches who understand your
            needs. Start your journey to better mental health today.
          </p>
          <AppButton
            className={css.heroBtn}
            variant="secondary"
            onClick={handleGetStartedClick}
          >
            Get Started <Icon className={css.heroBtnIcon} name="arrow-btn" />
          </AppButton>
        </div>
        <div className={css.heroImageWrapper}>
          <div className={css.heroImageLicenseWrapper}>
            <span className={css.heroImageLicenseIconWrapper}>
              <Icon className={css.heroImageLicenseIcon} name="license" />
            </span>
            <p className={css.heroImageLicenseText}>Licensed Specialists</p>
          </div>
          <Image
            className={css.heroImage}
            src="/Hero.webp"
            alt="Hero Image"
            width={630}
            height={498}
          />
          <div className={css.heroImageRatingWrapper}>
            <span className={css.heroImageRatingIconWrapper}>
              <Icon className={css.heroImageRatingIcon} name="rating" />
            </span>
            <p className={css.heroImageRatingText}>4.8 Average Rating</p>
          </div>
        </div>
      </div>
    </div>
  );
}
