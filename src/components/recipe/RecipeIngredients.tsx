import type { Ingredient } from '@/types/recipe';
import styles from './RecipeIngredients.module.css';

interface RecipeIngredientsProps {
  ingredients: Ingredient[];
}

export default function RecipeIngredients({ ingredients }: RecipeIngredientsProps) {
  return (
    <section className={styles.ingredients}>
      <h2>Ingredients</h2>
      <div className={styles.sectionContent}>
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
      </div>
    </section>
  );
}
