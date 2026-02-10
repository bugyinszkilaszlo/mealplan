import styles from './Header.module.css';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  title: string;
  imageUrl: string;
  prepTime: string;
  cookTime: string;
  servings: number;
  difficulty: string;
}

export default function Header({
  title,
  imageUrl,
  prepTime,
  cookTime,
  servings,
  difficulty,
}: HeaderProps) {
  return (
    <header
      className={styles.header}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <h1>
        <span>{title}</span>
      </h1>
      <div className={styles.recipeMeta}>
        <div className={styles.metaItem}>
          <strong>Előkészítési idő</strong>
          <span>{prepTime}</span>
        </div>
        <div className={styles.metaItem}>
          <strong>Főzési idő</strong>
          <span>{cookTime}</span>
        </div>
        <div className={styles.metaItem}>
          <strong>Adagok</strong>
          <span>{servings} fő</span>
        </div>
        <div className={styles.metaItem}>
          <strong>Nehézség</strong>
          <span>{difficulty}</span>
        </div>
      </div>
      <Button className='cta'>Hozzáadás</Button>
    </header>
  );
}
