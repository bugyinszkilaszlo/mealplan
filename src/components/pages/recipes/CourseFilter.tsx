'use client';

import styles from './FilterSection.module.css';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

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
  return (
    <div className={styles.filterSection}>
      <h3 className={styles.sectionTitle}>Fogás</h3>
      <ToggleGroup
        type='multiple'
        value={selected}
        onValueChange={onChange}
        variant='outline'
        spacing={2}
      >
        {courses.map((course) => (
          <ToggleGroupItem
            key={course.id}
            value={course.id}
            aria-label={course.label}
          >
            {course.label}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </div>
  );
}
