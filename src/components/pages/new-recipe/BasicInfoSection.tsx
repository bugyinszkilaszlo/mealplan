import styles from '@/app/new-recipe/page.module.css';
import Box from '@/components/ui/custom/Box';
import { Input } from '@/components/ui/input';
import { Field } from '@/components/ui/custom/Field';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Recipe } from '@/types/recipe';

interface BasicInfoSectionProps {
  title: string;
  prepTimeValue: number;
  prepTimeUnit: 'perc' | 'óra';
  cookTimeValue: number;
  cookTimeUnit: 'perc' | 'óra';
  servings: number;
  difficulty: Recipe['difficulty'];
  imagePreview: string;
  onTitleChange: (value: string) => void;
  onPrepTimeValueChange: (value: number) => void;
  onPrepTimeUnitChange: (value: 'perc' | 'óra') => void;
  onCookTimeValueChange: (value: number) => void;
  onCookTimeUnitChange: (value: 'perc' | 'óra') => void;
  onServingsChange: (value: number) => void;
  onDifficultyChange: (value: string) => void;
  onImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const BasicInfoSection = ({
  title,
  prepTimeValue,
  prepTimeUnit,
  cookTimeValue,
  cookTimeUnit,
  servings,
  difficulty,
  imagePreview,
  onTitleChange,
  onPrepTimeValueChange,
  onPrepTimeUnitChange,
  onCookTimeValueChange,
  onCookTimeUnitChange,
  onServingsChange,
  onDifficultyChange,
  onImageChange,
}: BasicInfoSectionProps) => {
  return (
    <Box title='Alapvető információk'>
      <Field label='Cím' htmlFor='title' required>
        <Input
          type='text'
          id='title'
          value={title}
          onChange={(e) => onTitleChange(e.target.value)}
          required
        />
      </Field>

      <Field label='Recept képe' htmlFor='imageFile' required>
        <Input
          type='file'
          id='imageFile'
          accept='image/*'
          onChange={onImageChange}
          required
        />
        {imagePreview && (
          <div className={styles.imagePreview}>
            <img src={imagePreview} alt='Recept előnézete' />
          </div>
        )}
      </Field>

      <div className={styles.fieldGroup}>
        <Field label='Előkészítési idő' htmlFor='prepTime' required>
          <div className='grid grid-cols-[2fr_1fr] gap-2'>
            <Input
              type='number'
              id='prepTime'
              value={prepTimeValue}
              onChange={(e) => onPrepTimeValueChange(Number(e.target.value))}
              min='1'
              placeholder='30'
              required
            />
            <Select
              value={prepTimeUnit}
              onValueChange={(value: 'perc' | 'óra') =>
                onPrepTimeUnitChange(value)
              }
            >
              <SelectTrigger id='prepTimeUnit' className='w-full'>
                <SelectValue />
              </SelectTrigger>
              <SelectContent position='popper' sideOffset={4}>
                <SelectItem value='perc'>perc</SelectItem>
                <SelectItem value='óra'>óra</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </Field>

        <Field label='Főzési idő' htmlFor='cookTime' required>
          <div className='grid grid-cols-[2fr_1fr] gap-2'>
            <Input
              type='number'
              id='cookTime'
              value={cookTimeValue}
              onChange={(e) => onCookTimeValueChange(Number(e.target.value))}
              min='1'
              placeholder='1'
              required
            />
            <Select
              value={cookTimeUnit}
              onValueChange={(value: 'perc' | 'óra') =>
                onCookTimeUnitChange(value)
              }
            >
              <SelectTrigger id='cookTimeUnit' className='w-full'>
                <SelectValue />
              </SelectTrigger>
              <SelectContent position='popper' sideOffset={4}>
                <SelectItem value='perc'>perc</SelectItem>
                <SelectItem value='óra'>óra</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </Field>
      </div>

      <div className={styles.fieldGroup}>
        <Field label='Adagok' htmlFor='servings' required>
          <Input
            type='number'
            id='servings'
            value={servings}
            onChange={(e) => onServingsChange(Number(e.target.value))}
            min='1'
            required
          />
        </Field>

        <Field label='Nehézség' htmlFor='difficulty' required>
          <Select value={difficulty} onValueChange={onDifficultyChange}>
            <SelectTrigger id='difficulty' className='w-full'>
              <SelectValue />
            </SelectTrigger>
            <SelectContent position='popper' sideOffset={4}>
              <SelectItem value='Easy'>Könnyű</SelectItem>
              <SelectItem value='Medium'>Közepes</SelectItem>
              <SelectItem value='Hard'>Nehéz</SelectItem>
            </SelectContent>
          </Select>
        </Field>
      </div>
    </Box>
  );
};

export default BasicInfoSection;
