'use client';

import Link from 'next/link';
import styles from './MealCard.module.css';
import { Button } from '@/components/ui/button';
import { useAddToPlan } from '@/lib/add-to-plan-context';

interface MealCardProps {
  url: string;
  thumbnail: string;
  title: string;
  hasAddButton?: boolean;
}

export default function MealCard({
  url,
  thumbnail,
  title,
  hasAddButton = true,
}: MealCardProps) {
  const { setOpen } = useAddToPlan();

  return (
    <article className={styles.article}>
      <Link
        href={url}
        className={styles.link}
        style={{ backgroundImage: `url(${thumbnail})` }}
      >
        <h2>
          <span>{title}</span>
        </h2>
      </Link>
      {hasAddButton && (
        <Button className='cta' onClick={() => setOpen(true)}>
          Hozzáad
        </Button>
      )}
    </article>
  );
}
