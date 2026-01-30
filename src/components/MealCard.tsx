import Link from 'next/link';
import styles from './MealCard.module.css';

interface MealCardProps {
  url: string;
  image: string;
  title: string;
  description: string;
}

export default function MealCard({ url, image, title, description }: MealCardProps) {
  return (
    <article className={styles.article}>
      <Link href={url} className={styles.link} style={{ backgroundImage: `url(${image})` }}>
        <h2><span>{title}</span></h2>
      </Link>
      <button className="cta">Add to MealPlan</button>
    </article>
  );
}
