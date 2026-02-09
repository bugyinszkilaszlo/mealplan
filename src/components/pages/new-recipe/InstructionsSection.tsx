import { Instruction } from '@/types/recipe';
import styles from '@/app/new-recipe/page.module.css';
import Box from '@/components/ui/custom/Box';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

interface InstructionsSectionProps {
  instructions: Instruction[];
  onAdd: () => void;
  onRemove: (index: number) => void;
  onUpdate: (index: number, field: keyof Instruction, value: string) => void;
}

const InstructionsSection = ({
  instructions,
  onAdd,
  onRemove,
  onUpdate,
}: InstructionsSectionProps) => {
  return (
    <Box title='Elkészítés'>
      {instructions.map((instruction, index) => (
        <div key={index} className={styles.arrayItem}>
          <div className={styles.instructionFields}>
            <Input
              type='text'
              value={instruction.title}
              onChange={(e) => onUpdate(index, 'title', e.target.value)}
              placeholder='Lépés címe'
              required
            />
            <Textarea
              value={instruction.description}
              onChange={(e) => onUpdate(index, 'description', e.target.value)}
              placeholder='Lépés leírása'
              rows={3}
              required
            />
          </div>
          {instructions.length > 1 && (
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
        + Lépés hozzáadása
      </Button>
    </Box>
  );
};

export default InstructionsSection;
