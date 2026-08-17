export type Favorite = {
  _id: string;
  name: string;
  avatar_url: string;
  specialization: string[];
  approaches: string[];
  languages: string[];
  price_per_hour: number;
  experience_years: number;
  rating: number;
  reviews: {
    reviewer: string;
    rating: number;
    comment: string;
  }[];
  about: string;
  conditions: string[];
  initial_consultation: boolean;
};
