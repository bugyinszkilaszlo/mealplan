import type { Instruction } from '@/types/recipe';
import Box from '@/components/ui/Box';
import styles from './Instructions.module.css';

interface InstructionsProps {
  instructions: Instruction[];
}

export default function Instructions({ instructions }: InstructionsProps) {
  return (
    <Box title='Elkészítés' className={styles.instructions}>
      <ol>
        {instructions.map((instruction, index) => (
          <li key={index}>
            <h3>{instruction.title}</h3>
            <p>{instruction.description}</p>
          </li>
        ))}
      </ol>
    </Box>
  );
}
