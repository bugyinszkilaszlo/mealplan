import type { Instruction } from '@/types/recipe';
import styles from './RecipeInstructions.module.css';

interface RecipeInstructionsProps {
  instructions: Instruction[];
}

export default function RecipeInstructions({ instructions }: RecipeInstructionsProps) {
  return (
    <section className={styles.instructions}>
      <h2>Instructions</h2>
      <div className={styles.sectionContent}>
        <ol>
          {instructions.map((instruction, index) => (
            <li key={index}>
              <h3>{instruction.title}</h3>
              <p>{instruction.description}</p>
            </li>
          ))}
        </ol>
      </div>
      <button className="cta">Add to MealPlan</button>
    </section>
  );
}
