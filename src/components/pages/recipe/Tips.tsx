import type { Tip } from '@/types/recipe';
import Box from '@/components/ui/Box';
import styles from './Tips.module.css';

interface TipsProps {
  tips: Tip[];
}

export default function Tips({ tips }: TipsProps) {
  return (
    <Box title='Tippek és trükkök' className={styles.tips}>
      <ul>
        {tips.map((tip, index) => (
          <li key={index}>
            <h3>{tip.title}</h3>
            <p>{tip.description}</p>
          </li>
        ))}
      </ul>
    </Box>
  );
}
