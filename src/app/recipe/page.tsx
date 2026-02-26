import Header from '@/components/pages/recipe/Header';
import Ingredients from '@/components/pages/recipe/Ingredients';
import Instructions from '@/components/pages/recipe/Instructions';
import Tips from '@/components/pages/recipe/Tips';
import AddToPlanButton from '@/components/pages/recipe/AddToPlanButton';
import type { Recipe } from '@/types/recipe';
import styles from './page.module.css';

const recipe: Recipe = {
  title: 'BBQ Pulled Pork',
  imageUrl: '/meals/01.jpg',
  prepTime: '20 perc',
  cookTime: '6-8 óra',
  servings: 8,
  difficulty: 'Közepes',
  ingredients: [
    {
      name: 'sertéslapocka (csonttal vagy csont nélkül)',
      unit: 'kg',
      amount: 2,
    },
    { name: 'barna cukor', unit: 'ek', amount: 2 },
    { name: 'pirospaprika', unit: 'ek', amount: 2 },
    { name: 'fokhagymapor', unit: 'ek', amount: 1 },
    { name: 'hagymapor', unit: 'ek', amount: 1 },
    { name: 'cayenne bors', unit: 'tk', amount: 1 },
    { name: 'só', unit: 'tk', amount: 2 },
    { name: 'fekete bors', unit: 'tk', amount: 1 },
    {
      name: 'BBQ szósz (kedvenc márkád vagy házi)',
      unit: 'csésze',
      amount: 2,
    },
    { name: 'almaecet', unit: 'csésze', amount: 0.5 },
    { name: 'csirkealaplé', unit: 'csésze', amount: 0.25 },
    { name: 'hamburger zsemle', unit: 'db', amount: 9 },
    { name: 'káposztasaláta tálaláshoz (opcionális)', unit: '', amount: 0 },
  ],
  instructions: [
    {
      title: 'Készítsd el a fűszerkeveréket:',
      description:
        'Egy kis tálban keverd össze a barna cukrot, pirospaprikát, fokhagymapor, hagymapor, cayenne bors, só és fekete bors.',
    },
    {
      title: 'Fűszerezd be a húst:',
      description:
        'Töröld szárazra a sertéslapockát papírtörlővel. Bőségesen dörzsöld be a fűszerkeverékkel a húst minden oldalon.',
    },
    {
      title: 'Lassú főzés:',
      description:
        'Tedd a fűszerezett húst egy lassú főzőedénybe. Add hozzá az almaecetet és a csirkealaplét. Feedd le és főzd alacsony hőfokon 6-8 órán át, amíg a hús villával könnyen szétszakítható.',
    },
    {
      title: 'Szaggasd szét a húst:',
      description:
        'Vedd ki a húst a lassú főzőedényből és tedd egy nagy vágódeszkára. Két villával szaggasd szét a húst, eltávolítva a nagyobb zsírdarabokat.',
    },
    {
      title: 'Add hozzá a szószt:',
      description:
        'Tedd vissza a szétszaggatott húst a lassú főzőedénybe. Öntsd hozzá a BBQ szószt és keverd jól össze. Hagyd főni alacsony hőfokon még 30 percig, hogy az ízek összeérjenek.',
    },
    {
      title: 'Pirítsd meg a zsemlét:',
      description:
        'Amíg a hús véglegesen elkészül, pirítsd meg enyhén a hamburger zsemléket egy serpenyőben vagy grillsütőben.',
    },
    {
      title: 'Összeállítás és tálalás:',
      description:
        'Halmozd rá a pulled pork-ot a pirított zsemlébe. Tetejére tehetsz káposztasalátát is, ha szeretnéd. Azonnal tálald és élvezd!',
    },
  ],
  tips: [
    {
      title: 'Előre elkészíthető:',
      description:
        'Ez a recept tökéletes étkezés tervezéshez! A pulled pork tárolható hűtőben akár 4 napig vagy fagyasztva akár 3 hónapig.',
    },
    {
      title: 'Állítsd be a csípősséget:',
      description:
        'A cayenne bors mennyiségét állítsd be saját ízlésed szerint. Enyhébb változathoz csökkentsd 1/2 teáskanálra vagy hagyd el teljesen.',
    },
    {
      title: 'Próbálj ki különböző fákat:',
      description:
        'Ha füstölőt használsz lassú főzőedény helyett, a hickory vagy almafa forgács csodálatos ízt ad a húsnak.',
    },
    {
      title: 'Tartsd nedvesen:',
      description:
        'Ne öntsd le az összes főzőlevet a BBQ szósz hozzáadása előtt. Egy kis ízletes folyadék segít megőrizni a hús lédússágát.',
    },
    {
      title: 'Maradék ötletek:',
      description:
        'Használd a maradék pulled pork-ot tacóban, nachosban, pizzán, vagy akár mac and cheese-ben egy finom csavarért!',
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
          <AddToPlanButton className={`cta ${styles.cta}`} />
        </div>

        <Tips tips={recipe.tips} />
      </div>
    </>
  );
}
