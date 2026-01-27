<script setup lang="ts">
</script>

<template>
  <header :style="{ backgroundImage: `url(/meals/01.jpg)` }">
    <h1><span>BBQ Pulled Pork</span></h1>
    <div class="recipe-meta">
      <div class="meta-item">
        <strong>Prep Time</strong><span>20 minutes</span>
      </div>
      <div class="meta-item">
        <strong>Cook Time</strong><span>6-8 hours</span>
      </div>
      <div class="meta-item">
        <strong>Servings</strong><span>8-10</span>
      </div>
      <div class="meta-item">
        <strong>Difficulty</strong><span>Medium</span>
      </div>
    </div>
  </header>

  <div class="sections">
    <section class="ingredients">
      <h2>Ingredients</h2>
      <div class="section-content">
        <ul>
          <li>4-5 lbs pork shoulder (bone-in or boneless)</li>
          <li>2 tbsp brown sugar</li>
          <li>2 tbsp paprika</li>
          <li>1 tbsp garlic powder</li>
          <li>1 tbsp onion powder</li>
          <li>1 tsp cayenne pepper</li>
          <li>2 tsp salt</li>
          <li>1 tsp black pepper</li>
          <li>2 cups BBQ sauce (your favorite brand or homemade)</li>
          <li>1/2 cup apple cider vinegar</li>
          <li>1/4 cup chicken broth</li>
          <li>8-10 hamburger buns</li>
          <li>Coleslaw for serving (optional)</li>
        </ul>
      </div>
    </section>

    <section class="instructions">
      <h2>Instructions</h2>
      <div class="section-content">
        <ol>
          <li>
            <h3>Prepare the rub:</h3>
            <p> In a small bowl, mix together brown sugar, paprika,
              garlic powder, onion powder, cayenne pepper, salt, and black pepper.</p>
          </li>
          <li>
            <h3>Season the pork:</h3>
            <p> Pat the pork shoulder dry with paper towels.
              Generously rub the spice mixture all over the pork, covering all sides.</p>
          </li>
          <li>
            <h3>Slow cook:</h3>
            <p>Place the seasoned pork in a slow cooker. Add apple cider
              vinegar and chicken broth. Cover and cook on low for 6-8 hours, or until the meat is fork-tender and
              easily pulls apart.</p>

          </li>
          <li>
            <h3>Shred the pork:</h3>
            <p> Remove the pork from the slow cooker and transfer to
              a large cutting board. Use two forks to shred the meat, discarding any large pieces of fat.</p>
          </li>
          <li>
            <h3>Add the sauce:</h3>
            <p>Return the shredded pork to the slow cooker. Pour in
              the BBQ sauce and mix well. Let it cook on low for another 30 minutes to allow the flavors to meld.</p>

          </li>
          <li>
            <h3>Toast the buns:</h3>
            <p> While the pork is finishing, lightly toast the
              hamburger buns in a skillet or under the broiler.</p>
          </li>
          <li>
            <h3>Assemble and serve:</h3>
            <p> Pile the pulled pork onto the toasted buns.
              Top with coleslaw if desired. Serve immediately and enjoy!</p>
          </li>
        </ol>
      </div>
    </section>

    <section class="tips">
      <h2>Tips & Tricks</h2>
      <div class="section-content">
        <ul>
          <li>
            <h3>Make ahead:</h3>
            <p>This recipe is perfect for meal prep! The pulled pork can
              be stored in the refrigerator for up to 4 days or frozen for up to 3 months.</p>
          </li>
          <li>
            <h3>Customize the heat:</h3>
            <p>Adjust the amount of cayenne pepper to your
              preference. For a milder version, reduce to 1/2 teaspoon or omit entirely.</p>
          </li>
          <li>
            <h3>Try different woods:</h3>
            <p>If using a smoker instead of a slow cooker,
              hickory or applewood chips add amazing flavor to the pork.</p>
          </li>
          <li>
            <h3>Keep it moist:</h3>
            <p>Don't drain all the cooking liquid before adding the
              BBQ sauce. A little of that flavorful liquid helps keep the meat juicy.</p>
          </li>
          <li>
            <h3>Leftover ideas:</h3>
            <p>Use leftover pulled pork in tacos, nachos, pizza,
              or even mac and cheese for a delicious twist!</p>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<style scoped>
header {
  position: relative;
  margin: 1rem 0;
  padding-top: 150%;
  background-position: center;
  background-size: cover;
  border-radius: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
}

h1 {
  position: absolute;
  top: 10px;
  right: 10px;
  left: 10px;
  margin: 0;
  padding: 0;
  font-size: 2rem;
}

h1 span {
  display: block;
  padding: 12px;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
}

.recipe-meta {
  position: absolute;
  bottom: 10px;
  right: 10px;
  left: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  padding: 16px;
  color: #fafafa;
  background-color: rgba(160, 160, 160, 0.8);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom-right-radius: 18px;
  border-bottom-left-radius: 18px;
}

.meta-item {
  text-align: center;
  font-size: .8rem;
}

.meta-item strong {
  display: inline-block;
  font-weight: 400;
  margin-bottom: 4px;
  padding-bottom: 4px;
  border-bottom: 1px solid var(--accent-color);
}

.meta-item span {
  display: block;
}

@media (min-width: 576px) {
  header {
    padding-top: 100%;
  }

  h1 {
    right: auto;
  }

  h1 span {
    border-radius: 18px 0 18px 0;
  }

  .recipe-meta {
    left: auto;
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (min-width: 768px) {
  header {
    padding-top: 75%;
  }

  h1 span {
    display: inline-block;
  }
}

@media (min-width: 1024px) {
  header {
    padding-top: 50%;
  }
}

@media (min-width: 1200px) {
  header {
    padding-top: 40%;
  }
}

section {
  margin: 2rem 0;
}

section h2 {
  margin: 0 0 -7px 20px;
  font-size: 2rem;
}

.section-content {
  padding: 20px;
  background-color: #fafafa;
  border-radius: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

@media (min-width: 1024px) {
  .sections {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-areas:
      "ingredients instructions"
      "tips instructions";
    gap: 32px;
    margin: 32px 0;
  }

  section {
    margin: 0;
  }

  .ingredients {
    grid-area: ingredients;
  }

  .instructions {
    grid-area: instructions;
  }

  .tips {
    grid-area: tips;
  }
}

@media (min-width: 1200px) {
  .sections {
    gap: 48px;
    margin: 48px 0;
  }
}

.ingredients ul {
  margin-bottom: 8px;
}

.ingredients ul li {
  margin: 16px 0 0 20px;
  list-style-type: disc;
}

.instructions ol li,
.tips ul li {
  margin: 24px 0 0 20px;
  list-style-type: decimal;
  font-weight: 600;
}

.instructions ol li h3,
.tips ul li h3 {
  margin: 0 0 8px 0;
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
}

.instructions ol li p,
.tips ul li p {
  margin: 0 0 12px 0;
  font-weight: 400;
}
</style>
