export const specializations = [
  'Anxiety',
  'Depression',
  'Stress Management',
  'Trauma',
  'PTSD',
  'Grief',
  'Relationships',
  'Family Conflict',
  'Self-esteem',
  'Addiction',
  'Life Transitions',
  'Burnout',
  'Work-related Stress',
  'Childhood Trauma',
  'Communication',
  'Couples Therapy',
  'Loss',
  'OCD',
  'Phobias',
  'Parenting',
  'ADHD',
  'Self-regulation',
  'Productivity',
  'Cultural Identity',
  'Recovery Support',
  'Codependency',
  'Eating Disorders',
  'Body Image',
  "Men's Mental Health",
  'Expat Mental Health',
  'Complex Trauma',
  'Self-discovery',
  'Social Anxiety',
] as const;

export const approaches = [
  '12-step Facilitation',
  'ACT',
  'CBT',
  'Coaching Psychology',
  'Compassion-focused Therapy',
  'DBT',
  'EFT',
  'EMDR',
  'ERP',
  'Exposure Therapy',
  'Gestalt',
  'IFS',
  'Mindfulness',
  'Motivational Interviewing',
  'Narrative Therapy',
  'Psychoanalysis',
  'Psychoeducation',
  'Schema Therapy',
  'Solution-focused Therapy',
  'Somatic Therapy',
  'Systemic Therapy',
  'Trauma-focused CBT',
] as const;

export type Specialization = (typeof specializations)[number];
export type Approach = (typeof approaches)[number];

export type Psychologist = {
  _id: string;
  name: string;
  avatar_url: string;
  specialization: Specialization[];
  approaches: Approach[];
  languages: string[];
  price_per_hour: number;
  experience_years: number;
  rating: number;
  reviews: { reviewer: string; rating: number; comment: string }[];
  about: string;
  conditions: string[];
  initial_consultation: boolean;
};
