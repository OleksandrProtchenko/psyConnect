import type { Psychologist } from '@/types/psychologists/psychologists';
import PsychologistsCard from './PsychologistsCard/PsychologistsCard';
import css from './PsychologistsList.module.css';
interface PsychologistsListProps {
  data: {
    items: Psychologist[];
    total: number;
    page: number;
    limit: number;
  };
}

export default function PsychologistsList({ data }: PsychologistsListProps) {
  console.log(data);
  const { items, total, page, limit } = data;
  return (
    <ul className={css.psychologistsList}>
      {items.map(psychologist => (
        <PsychologistsCard key={psychologist._id} psychologist={psychologist} />
      ))}
    </ul>
  );
}
