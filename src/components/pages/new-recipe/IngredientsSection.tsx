import { Ingredient } from '@/types/recipe';
import styles from '@/app/new-recipe/page.module.css';
import Box from '@/components/ui/Box';

interface IngredientsSectionProps {
  ingredients: Ingredient[];
  onAdd: () => void;
  onRemove: (index: number) => void;
  onUpdate: (
    index: number,
    field: keyof Ingredient,
    value: string | number,
  ) => void;
}

const IngredientsSection = ({
  ingredients,
  onAdd,
  onRemove,
  onUpdate,
}: IngredientsSectionProps) => {
  return (
    <Box title='Hozzávalók'>
      {ingredients.map((ingredient, index) => (
        <div key={index} className={styles.arrayItem}>
          <div className={styles.ingredientFields}>
            <input
              type='text'
              value={ingredient.name}
              onChange={(e) => onUpdate(index, 'name', e.target.value)}
              placeholder='Hozzávaló neve'
              required
            />
            <input
              type='number'
              value={ingredient.amount || ''}
              onChange={(e) =>
                onUpdate(index, 'amount', Number(e.target.value))
              }
              placeholder='Mennyiség'
              step='0.01'
              required
            />
            <input
              type='text'
              value={ingredient.unit}
              onChange={(e) => onUpdate(index, 'unit', e.target.value)}
              placeholder='Mértékegység (kg, csésze, stb.)'
            />
          </div>
          {ingredients.length > 1 && (
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
        + Hozzávaló hozzáadása
      </button>
    </Box>
  );
};

export default IngredientsSection;
