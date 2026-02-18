import type { Ingredient } from '@/types/recipe';
import Box from '@/components/ui/custom/Box';
import styles from './Ingredients.module.css';

interface IngredientsProps {
  ingredients: Ingredient[];
}

export default function Ingredients({ ingredients }: IngredientsProps) {
  return (
    <Box title='Hozzávalók' className={styles.ingredients}>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>
            {ingredient.amount > 0 && (
              <span>
                {ingredient.amount} {ingredient.unit}{' '}
              </span>
            )}
            {ingredient.name}
          </li>
        ))}
      </ul>
    </Box>
  );
}
