'use client';

import styles from './FilterSection.module.css';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

interface MealTimeFilterProps {
  selected: string[];
  onChange: (selected: string[]) => void;
}

const mealTimes = [
  { id: 'reggeli', label: 'Reggeli' },
  { id: 'tizorai', label: 'Tízórai' },
  { id: 'ebed', label: 'Ebéd' },
  { id: 'uzsonna', label: 'Uzsonna' },
  { id: 'vacsora', label: 'Vacsora' },
];

export default function MealTimeFilter({
  selected,
  onChange,
}: MealTimeFilterProps) {
  return (
    <div className={styles.filterSection}>
      <h3 className={styles.sectionTitle}>Étkezés</h3>
      <ToggleGroup
        type='multiple'
        value={selected}
        onValueChange={onChange}
        variant='outline'
        spacing={2}
      >
        {mealTimes.map((mealTime) => (
          <ToggleGroupItem
            key={mealTime.id}
            value={mealTime.id}
            aria-label={mealTime.label}
          >
            {mealTime.label}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </div>
  );
}
