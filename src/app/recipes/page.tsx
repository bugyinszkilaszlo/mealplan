import MealCard from '@/components/ui/MealCard';
import styles from './page.module.css';

const demoData = [
  {
    id: 1,
    title: 'Spaghetti Carbonara',
    description: 'Classic Italian pasta dish with eggs, cheese, and pancetta.',
    image: '/meals/01.jpg',
    thumbnail: '/meals/01-thumb.jpg',
    url: '/recipe',
  },
  {
    id: 2,
    title: 'Chicken Tikka Masala',
    description:
      'Tender chicken in a creamy, spiced tomato sauce with aromatic herbs.',
    image: '/meals/02.jpg',
    thumbnail: '/meals/02-thumb.jpg',
    url: '/recipe',
  },
  {
    id: 3,
    title: 'Vegetable Stir Fry',
    description:
      'Fresh vegetables tossed in a savory sauce with ginger and garlic.',
    image: '/meals/03.jpg',
    thumbnail: '/meals/03-thumb.jpg',
    url: '/recipe',
  },
  {
    id: 4,
    title: 'Beef Tacos',
    description:
      'Seasoned ground beef in crispy shells with lettuce and cheese.',
    image: '/meals/04.jpg',
    thumbnail: '/meals/04-thumb.jpg',
    url: '/recipe',
  },
  {
    id: 5,
    title: 'Caesar Salad',
    description:
      'Crisp romaine lettuce with parmesan, croutons, and creamy dressing.',
    image: '/meals/05.jpg',
    thumbnail: '/meals/05-thumb.jpg',
    url: '/recipe',
  },
  {
    id: 6,
    title: 'Grilled Salmon',
    description:
      'Fresh Atlantic salmon with lemon butter and roasted vegetables.',
    image: '/meals/06.jpg',
    thumbnail: '/meals/06-thumb.jpg',
    url: '/recipe',
  },
  {
    id: 7,
    title: 'Mushroom Risotto',
    description: 'Creamy Italian rice cooked with wild mushrooms and parmesan.',
    image: '/meals/07.jpg',
    thumbnail: '/meals/07-thumb.jpg',
    url: '/recipe',
  },
  {
    id: 8,
    title: 'BBQ Pulled Pork',
    description:
      'Slow-cooked pork shoulder in smoky BBQ sauce on a toasted bun.',
    image: '/meals/08.jpg',
    thumbnail: '/meals/08-thumb.jpg',
    url: '/recipe',
  },
];

export default function RecipesPage() {
  return (
    <>
      <h1>Recipes</h1>
      <ul className={styles.grid}>
        {demoData.map((meal) => (
          <li key={meal.id}>
            <MealCard
              url={meal.url}
              thumbnail={meal.thumbnail}
              title={meal.title}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
