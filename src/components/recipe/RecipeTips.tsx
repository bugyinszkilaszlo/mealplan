import type { Tip } from '@/types/recipe';
import styles from './RecipeTips.module.css';

interface RecipeTipsProps {
  tips: Tip[];
}

export default function RecipeTips({ tips }: RecipeTipsProps) {
  return (
    <section className={styles.tips}>
      <h2>Tips & Tricks</h2>
      <div className={styles.sectionContent}>
        <ul>
          {tips.map((tip, index) => (
            <li key={index}>
              <h3>{tip.title}</h3>
              <p>{tip.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
