import Link from 'next/link';
import styles from './MealCard.module.css';

interface MealCardProps {
  url: string;
  thumbnail: string;
  title: string;
}

export default function MealCard({ url, thumbnail, title }: MealCardProps) {
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
      <button className='cta'>Add to MealPlan</button>
    </article>
  );
}
