import Header from '@/components/recipe/Header';
import Ingredients from '@/components/recipe/Ingredients';
import Instructions from '@/components/recipe/Instructions';
import Tips from '@/components/recipe/Tips';
import type { Recipe } from '@/types/recipe';
import styles from './page.module.css';

const recipe: Recipe = {
  title: 'BBQ Pulled Pork',
  imageUrl: '/meals/01.jpg',
  prepTime: '20 minutes',
  cookTime: '6-8 hours',
  servings: 8,
  difficulty: 'Medium',
  ingredients: [
    { name: 'pork shoulder (bone-in or boneless)', unit: 'lbs', amount: 4.5 },
    { name: 'brown sugar', unit: 'tbsp', amount: 2 },
    { name: 'paprika', unit: 'tbsp', amount: 2 },
    { name: 'garlic powder', unit: 'tbsp', amount: 1 },
    { name: 'onion powder', unit: 'tbsp', amount: 1 },
    { name: 'cayenne pepper', unit: 'tsp', amount: 1 },
    { name: 'salt', unit: 'tsp', amount: 2 },
    { name: 'black pepper', unit: 'tsp', amount: 1 },
    {
      name: 'BBQ sauce (your favorite brand or homemade)',
      unit: 'cups',
      amount: 2,
    },
    { name: 'apple cider vinegar', unit: 'cup', amount: 0.5 },
    { name: 'chicken broth', unit: 'cup', amount: 0.25 },
    { name: 'hamburger buns', unit: 'pcs', amount: 9 },
    { name: 'Coleslaw for serving (optional)', unit: '', amount: 0 },
  ],
  instructions: [
    {
      title: 'Prepare the rub:',
      description:
        'In a small bowl, mix together brown sugar, paprika, garlic powder, onion powder, cayenne pepper, salt, and black pepper.',
    },
    {
      title: 'Season the pork:',
      description:
        'Pat the pork shoulder dry with paper towels. Generously rub the spice mixture all over the pork, covering all sides.',
    },
    {
      title: 'Slow cook:',
      description:
        'Place the seasoned pork in a slow cooker. Add apple cider vinegar and chicken broth. Cover and cook on low for 6-8 hours, or until the meat is fork-tender and easily pulls apart.',
    },
    {
      title: 'Shred the pork:',
      description:
        'Remove the pork from the slow cooker and transfer to a large cutting board. Use two forks to shred the meat, discarding any large pieces of fat.',
    },
    {
      title: 'Add the sauce:',
      description:
        'Return the shredded pork to the slow cooker. Pour in the BBQ sauce and mix well. Let it cook on low for another 30 minutes to allow the flavors to meld.',
    },
    {
      title: 'Toast the buns:',
      description:
        'While the pork is finishing, lightly toast the hamburger buns in a skillet or under the broiler.',
    },
    {
      title: 'Assemble and serve:',
      description:
        'Pile the pulled pork onto the toasted buns. Top with coleslaw if desired. Serve immediately and enjoy!',
    },
  ],
  tips: [
    {
      title: 'Make ahead:',
      description:
        'This recipe is perfect for meal prep! The pulled pork can be stored in the refrigerator for up to 4 days or frozen for up to 3 months.',
    },
    {
      title: 'Customize the heat:',
      description:
        'Adjust the amount of cayenne pepper to your preference. For a milder version, reduce to 1/2 teaspoon or omit entirely.',
    },
    {
      title: 'Try different woods:',
      description:
        'If using a smoker instead of a slow cooker, hickory or applewood chips add amazing flavor to the pork.',
    },
    {
      title: 'Keep it moist:',
      description:
        "Don't drain all the cooking liquid before adding the BBQ sauce. A little of that flavorful liquid helps keep the meat juicy.",
    },
    {
      title: 'Leftover ideas:',
      description:
        'Use leftover pulled pork in tacos, nachos, pizza, or even mac and cheese for a delicious twist!',
    },
  ],
};

export default function RecipePage() {
  return (
    <>
      <Header
        title={recipe.title}
        imageUrl={recipe.imageUrl}
        prepTime={recipe.prepTime}
        cookTime={recipe.cookTime}
        servings={recipe.servings}
        difficulty={recipe.difficulty}
      />

      <div className={styles.sections}>
        <Ingredients ingredients={recipe.ingredients} />

        <div className={styles.instructionsWrapper}>
          <Instructions instructions={recipe.instructions} />
          <button className={`cta ${styles.cta}`}>Add to MealPlan</button>
        </div>

        <Tips tips={recipe.tips} />
      </div>
    </>
  );
}
