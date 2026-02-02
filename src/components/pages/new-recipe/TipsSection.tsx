import { Tip } from '@/types/recipe';
import styles from '@/app/new-recipe/page.module.css';
import Box from '@/components/ui/Box';

interface TipsSectionProps {
  tips: Tip[];
  onAdd: () => void;
  onRemove: (index: number) => void;
  onUpdate: (index: number, field: keyof Tip, value: string) => void;
}

const TipsSection = ({ tips, onAdd, onRemove, onUpdate }: TipsSectionProps) => {
  return (
    <Box title='Tips (Optional)'>
      {tips.map((tip, index) => (
        <div key={index} className={styles.arrayItem}>
          <div className={styles.tipFields}>
            <input
              type='text'
              value={tip.title}
              onChange={(e) => onUpdate(index, 'title', e.target.value)}
              placeholder='Tip title'
            />
            <textarea
              value={tip.description}
              onChange={(e) => onUpdate(index, 'description', e.target.value)}
              placeholder='Tip description'
              rows={2}
            />
          </div>
          <button
            type='button'
            onClick={() => onRemove(index)}
            className={styles.removeButton}
          >
            Remove
          </button>
        </div>
      ))}

      <button type='button' onClick={onAdd} className={styles.addButton}>
        + Add Tip
      </button>
    </Box>
  );
};

export default TipsSection;
