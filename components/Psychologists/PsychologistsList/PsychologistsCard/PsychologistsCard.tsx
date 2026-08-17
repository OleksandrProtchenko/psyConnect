'use client';

import { Psychologist } from '@/types/psychologists/psychologists';
import css from './PsychologistsCard.module.css';
import { Icon } from '@/components/ui/Icon/Icon';
import Image from 'next/image';
import { AppButton } from '@/components/ui/Button/Button';
import {
  normalizeLanguages,
  normalizeNameForAvatar,
} from '@/helpers/normalizeFunctions/normalizeFunctions';
import { useState } from 'react';

interface PsychologistCardProps {
  psychologist: Psychologist;
}

export default function PsychologistsCard({
  psychologist,
}: PsychologistCardProps) {
  const {
    name,
    avatar_url,
    specialization,
    approaches,
    languages,
    price_per_hour: price,
    experience_years: exp,
    rating,
    reviews,
    about,
    conditions,
    initial_consultation: freeSession,
  } = psychologist;

  const [isOpen, setIsOpen] = useState(false);
  const [favorite, setFavorite] = useState(false);

  return (
    <li className={css.cardWrapper}>
      {freeSession && (
        <span className={css.freeConsultationWrapper}>
          <Icon className={css.freeConsultationIcon} name="free-consultation" />
          Free first session
        </span>
      )}
      <span className={css.cardFavoriteIconWrapper}>
        <Icon
          onClick={() => setFavorite(!favorite)}
          className={css.cardFavoriteIcon}
          name={favorite === false ? 'empty-heart' : 'full-heart'}
        />
      </span>
      <div className={css.cardContent}>
        <div className={css.cardHeader}>
          <div className={css.cardImageWrapper}>
            <Image
              className={css.cardImage}
              src={avatar_url}
              alt={name}
              width={80}
              height={80}
            />
          </div>
          <div className={css.cardInfoWrapper}>
            <h2 className={css.cardInfoTitle}>{name}</h2>
            <ul className={css.cardInfoStats}>
              <li className={css.cardRating}>
                <Icon
                  className={`${css.cardStatsIcon} ${css.ratingIcon}`}
                  name="empty-star"
                />
                {rating}
              </li>
              <li className={css.cardExperience}>
                <Icon
                  className={`${css.cardStatsIcon} ${css.experienceIcon}`}
                  name="experience"
                />
                {exp} years
              </li>
              <li className={css.cardLanguage}>
                <Icon
                  className={`${css.cardStatsIcon} ${css.languageIcon}`}
                  name="language"
                />
                {normalizeLanguages(languages)}
              </li>
            </ul>
            <ul className={css.cardInfoSpecializationList}>
              {specialization.map((spec, index) => (
                <li key={index} className={css.cardInfoSpecializationItem}>
                  {spec}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={css.cardBody}>
          <p className={css.cardAbout}>{about}</p>
          <ul className={css.cardInfoConditionsList}>
            {conditions.map((condition, index) => (
              <li key={index} className={css.cardInfoConditionItem}>
                {condition}
              </li>
            ))}
          </ul>
          <div
            className={`${css.hiddenContent} ${
              isOpen ? css.hiddenContentOpen : ''
            }`}
          >
            <div className={css.cardApproachWrapper}>
              <span className={css.cardApproachTitle}>
                Therapeutic Approaches
              </span>
              <ul className={css.cardApproachList}>
                {approaches.map((approach, index) => (
                  <li key={index} className={css.cardApproachItem}>
                    {approach}
                  </li>
                ))}
              </ul>
            </div>
            <div className={css.cardReviewsWrapper}>
              <span className={css.cardReviewsTitle}>Client Reviews</span>
              <ul className={css.cardReviewList}>
                {reviews.map((review, index) => (
                  <li key={index} className={css.cardReviewItem}>
                    <article className={css.cardReviewContent}>
                      <div className={css.cardReviewInfo}>
                        <span className={css.cardReviewAvatar}>
                          {normalizeNameForAvatar(review.reviewer)}
                        </span>
                        <div className={css.cardReviewAuthorWrapper}>
                          <span className={css.cardReviewAuthorName}>
                            {review.reviewer}
                          </span>
                          <span className={css.cardReviewAuthorRating}>
                            {Array.from({ length: review.rating }).map(
                              (_, i) => (
                                <Icon
                                  className={css.ratingIcon}
                                  key={`f${i}`}
                                  name="empty-star"
                                />
                              )
                            )}
                          </span>
                        </div>
                        <span className={css.cardReviewDate}>March 2025</span>
                      </div>
                      <p
                        className={css.cardReviewText}
                      >{`"${review.comment}"`}</p>
                    </article>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className={css.cardFooter}>
          <p className={css.cardPrice}>
            <span className={css.cardPriceValue}>${price}</span> / session
          </p>
          <div className={css.cardActionsWrapper}>
            <AppButton
              className={css.cardActionsBtn}
              type="button"
              onClick={() => setIsOpen(prev => !prev)}
              ariaExpended={isOpen}
            >
              Read more <Icon className={css.cardActionsIcon} name="arrow" />
            </AppButton>
            <AppButton type="button" variant="secondary">
              Book a session
            </AppButton>
          </div>
        </div>
      </div>
    </li>
  );
}
