'use client';

import styles from './FilterSection.module.css';
import { Button } from '@/components/ui/button';

interface CourseFilterProps {
  selected: string[];
  onChange: (selected: string[]) => void;
}

const courses = [
  { id: 'eloetel', label: 'Előétel' },
  { id: 'leves', label: 'Leves' },
  { id: 'foetel', label: 'Főétel' },
  { id: 'desszert', label: 'Desszert' },
  { id: 'szendvics', label: 'Szendvics' },
  { id: 'salata', label: 'Saláta' },
];

export default function CourseFilter({
  selected,
  onChange,
}: CourseFilterProps) {
  const handleToggle = (id: string) => {
    if (selected.includes(id)) {
      onChange(selected.filter((item) => item !== id));
    } else {
      onChange([...selected, id]);
    }
  };

  return (
    <div className={styles.filterSection}>
      <h3 className={styles.sectionTitle}>Fogás</h3>
      <div className={styles.optionsGrid}>
        {courses.map((course) => (
          <Button
            key={course.id}
            type='button'
            variant={selected.includes(course.id) ? 'default' : 'outline'}
            className={`${styles.filterOption} ${
              selected.includes(course.id) ? styles.active : ''
            }`}
            onClick={() => handleToggle(course.id)}
          >
            {course.label}
          </Button>
        ))}
      </div>
    </div>
  );
}
