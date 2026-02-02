import styles from './Header.module.css';

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
          <strong>Prep Time</strong>
          <span>{prepTime}</span>
        </div>
        <div className={styles.metaItem}>
          <strong>Cook Time</strong>
          <span>{cookTime}</span>
        </div>
        <div className={styles.metaItem}>
          <strong>Servings</strong>
          <span>{servings} ppl</span>
        </div>
        <div className={styles.metaItem}>
          <strong>Difficulty</strong>
          <span>{difficulty}</span>
        </div>
      </div>
      <button className='cta'>Add to MealPlan</button>
    </header>
  );
}
