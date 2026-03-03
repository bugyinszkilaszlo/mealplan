import { Ingredient } from '@/types/recipe';
import styles from '@/app/new-recipe/page.module.css';
import Box from '@/components/ui/custom/Box';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

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
            <Input
              type='text'
              value={ingredient.name}
              onChange={(e) => onUpdate(index, 'name', e.target.value)}
              placeholder='Hozzávaló neve'
              required
            />
            <Input
              type='number'
              value={ingredient.amount || ''}
              onChange={(e) =>
                onUpdate(index, 'amount', Number(e.target.value))
              }
              placeholder='Mennyiség'
              step='0.01'
              required
            />
            <div style={{width: '160px'}}>
              <Select value={ingredient.unit} onValueChange={(v) => onUpdate(index, 'unit', v)}>
                <SelectTrigger className='w-full'>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent position='popper' sideOffset={4}>
                  <SelectItem value='G'>g</SelectItem>
                  <SelectItem value='KG'>kg</SelectItem>
                  <SelectItem value='L'>l</SelectItem>
                  <SelectItem value='ML'>ml</SelectItem>
                  <SelectItem value='PIECE'>db</SelectItem>
                  <SelectItem value='PINCH'>csipet</SelectItem>
                  <SelectItem value='TBSP'>ek</SelectItem>
                  <SelectItem value='TSP'>tk</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          {ingredients.length > 1 && (
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
        + Hozzávaló hozzáadása
      </Button>
    </Box>
  );
};

export default IngredientsSection;
