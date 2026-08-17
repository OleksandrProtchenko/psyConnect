import { Psychologist } from '@/types/psychologists/psychologists';
import css from './PsychologistsCard.module.css';
import { Icon } from '@/components/ui/Icon/Icon';

interface PsychologistCardProps {
  psychologist: Psychologist;
}

export default function PsychologistsCard({
  psychologist,
}: PsychologistCardProps) {
  const {
    _id,
    name,
    avatar_url,
    specialization,
    approaches,
    languages,
    price_per_hour,
    experience_years,
    rating,
    reviews,
    about,
    conditions,
    initial_consultation,
  } = psychologist;
  return (
    <li className={css.cardWrapper}>
      <span className={css.freeConsultationWrapper}></span>
      <span className={css.cardFavoriteIconWrapper}>
        <Icon className={css.cardFavoriteIcon} name="empty-heart" />
      </span>
      <div className={css.cardHeader}></div>
      <div className={css.cardBody}></div>
      <div className={css.cardFooter}></div>
    </li>
  );
}
