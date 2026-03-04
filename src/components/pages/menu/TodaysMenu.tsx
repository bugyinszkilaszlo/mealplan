import type { Feature, MealTime } from '@/components/ui/project-calendar';
import MealCard from '@/components/ui/custom/MealCard';
import styles from './TodaysMenu.module.css';

interface TodaysMenuProps {
  features: Feature[];
  mealTimes: MealTime[];
}

function isSameDay(a: Date, b: Date): boolean {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

export default function TodaysMenu({ features, mealTimes }: TodaysMenuProps) {
  const today = new Date();

  const todaysFeatures = features.filter((f) => isSameDay(f.date, today));

  const grouped = mealTimes
    .map((mealTime) => ({
      mealTime,
      items: todaysFeatures.filter((f) => f.mealTime.id === mealTime.id),
    }))
    .filter((group) => group.items.length > 0);

  if (grouped.length === 0) {
    return (
      <section className={styles.section}>
        <h2 className={styles.heading}>Mai menü</h2>
        <p className={styles.empty}>Nincs mai menü rögzítve.</p>
      </section>
    );
  }

  return (
    <section className={styles.section}>
      <div className={styles.groups}>
        {grouped.map(({ mealTime, items }) => (
          <div
            key={mealTime.id}
            className={styles.group}
            style={{ borderColor: mealTime.color }}
          >
            <h3
              className={styles.mealTimeLabel}
              style={{ color: mealTime.color }}
            >
              {mealTime.name}
            </h3>
            <div className={styles.cards}>
              {items.map((feature) => {
                const idx = ((parseInt(feature.id, 10) - 1) % 17) + 1;
                const thumbnail = `/meals/${String(idx).padStart(2, '0')}-thumb.jpg`;
                return (
                  <MealCard
                    key={feature.id}
                    url={feature.url}
                    thumbnail={thumbnail}
                    title={feature.name}
                    hasAddButton={false}
                  />
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
