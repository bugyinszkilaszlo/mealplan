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

interface BasicInfoSectionProps {
  title: string;
  prepTime: string;
  cookTime: string;
  servings: number;
  difficulty: string;
  imagePreview: string;
  onTitleChange: (value: string) => void;
  onPrepTimeChange: (value: string) => void;
  onCookTimeChange: (value: string) => void;
  onServingsChange: (value: number) => void;
  onDifficultyChange: (value: string) => void;
  onImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const BasicInfoSection = ({
  title,
  prepTime,
  cookTime,
  servings,
  difficulty,
  imagePreview,
  onTitleChange,
  onPrepTimeChange,
  onCookTimeChange,
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
          <Input
            type='text'
            id='prepTime'
            value={prepTime}
            onChange={(e) => onPrepTimeChange(e.target.value)}
            placeholder='20 perc'
            required
          />
        </Field>

        <Field label='Főzési idő' htmlFor='cookTime' required>
          <Input
            type='text'
            id='cookTime'
            value={cookTime}
            onChange={(e) => onCookTimeChange(e.target.value)}
            placeholder='6-8 óra'
            required
          />
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
