import { Tip } from '@/types/recipe';
import styles from '@/app/new-recipe/page.module.css';
import Box from '@/components/ui/custom/Box';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

interface TipsSectionProps {
  tips: Tip[];
  onAdd: () => void;
  onRemove: (index: number) => void;
  onUpdate: (index: number, field: keyof Tip, value: string) => void;
}

const TipsSection = ({ tips, onAdd, onRemove, onUpdate }: TipsSectionProps) => {
  return (
    <Box title='Tippek (Opcionális)'>
      {tips.map((tip, index) => (
        <div key={index} className={styles.arrayItem}>
          <div className={styles.tipFields}>
            <Input
              type='text'
              value={tip.title}
              onChange={(e) => onUpdate(index, 'title', e.target.value)}
              placeholder='Tipp címe'
            />
            <Textarea
              value={tip.description}
              onChange={(e) => onUpdate(index, 'description', e.target.value)}
              placeholder='Tipp leírása'
              rows={2}
            />
          </div>
          {tips.length > 1 && (
            <Button
              type='button'
              onClick={() => onRemove(index)}
              variant='destructive'
              size='sm'
              className={styles.removeButton}
            >
              Eltávolítás
            </Button>
          )}
        </div>
      ))}

      <Button
        type='button'
        onClick={onAdd}
        variant='outline'
        className={styles.addButton}
      >
        + Tipp hozzáadása
      </Button>
    </Box>
  );
};

export default TipsSection;
