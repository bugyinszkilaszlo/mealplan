'use client';

import styles from './FilterSection.module.css';

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
  const handleToggle = (id: string) => {
    if (selected.includes(id)) {
      onChange(selected.filter((item) => item !== id));
    } else {
      onChange([...selected, id]);
    }
  };

  return (
    <div className={styles.filterSection}>
      <h3 className={styles.sectionTitle}>Étkezés</h3>
      <div className={styles.optionsGrid}>
        {mealTimes.map((mealTime) => (
          <button
            key={mealTime.id}
            type='button'
            className={`${styles.filterOption} ${
              selected.includes(mealTime.id) ? styles.active : ''
            }`}
            onClick={() => handleToggle(mealTime.id)}
          >
            {mealTime.label}
          </button>
        ))}
      </div>
    </div>
  );
}
