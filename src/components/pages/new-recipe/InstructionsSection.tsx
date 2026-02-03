import { Instruction } from '@/types/recipe';
import styles from '@/app/new-recipe/page.module.css';
import Box from '@/components/ui/Box';

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
            <input
              type='text'
              value={instruction.title}
              onChange={(e) => onUpdate(index, 'title', e.target.value)}
              placeholder='Lépés címe'
              required
            />
            <textarea
              value={instruction.description}
              onChange={(e) => onUpdate(index, 'description', e.target.value)}
              placeholder='Lépés leírása'
              rows={3}
              required
            />
          </div>
          {instructions.length > 1 && (
            <button
              type='button'
              onClick={() => onRemove(index)}
              className={styles.removeButton}
            >
              Eltávolítás
            </button>
          )}
        </div>
      ))}

      <button type='button' onClick={onAdd} className={styles.addButton}>
        + Lépés hozzáadása
      </button>
    </Box>
  );
};

export default InstructionsSection;
