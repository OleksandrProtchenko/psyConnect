import type { Psychologist } from '@/types/psychologists/psychologists';

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
    <div>
      {items.map(psychologist => (
        <div key={psychologist._id}>
          <h2>{psychologist.name}</h2>
          <p>{psychologist.about}</p>
          {psychologist.approaches.map((approach: string) => (
            <span key={approach}>{approach}</span>
          ))}
        </div>
      ))}
    </div>
  );
}
