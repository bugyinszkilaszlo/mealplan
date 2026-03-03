/*
  Warnings:

  - You are about to drop the `RecipeLabel` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `RecipeMealGroup` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `mealGroup` to the `Recipe` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "RecipeLabel" DROP CONSTRAINT "RecipeLabel_labelId_fkey";

-- DropForeignKey
ALTER TABLE "RecipeLabel" DROP CONSTRAINT "RecipeLabel_recipeId_fkey";

-- DropForeignKey
ALTER TABLE "RecipeMealGroup" DROP CONSTRAINT "RecipeMealGroup_recipeId_fkey";

-- AlterTable
ALTER TABLE "Recipe" ADD COLUMN     "mealGroup" "MealGroup" NOT NULL;

-- DropTable
DROP TABLE "RecipeLabel";

-- DropTable
DROP TABLE "RecipeMealGroup";

-- CreateTable
CREATE TABLE "_LabelToRecipe" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_LabelToRecipe_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_LabelToRecipe_B_index" ON "_LabelToRecipe"("B");

-- CreateIndex
CREATE INDEX "Recipe_mealGroup_idx" ON "Recipe"("mealGroup");

-- AddForeignKey
ALTER TABLE "_LabelToRecipe" ADD CONSTRAINT "_LabelToRecipe_A_fkey" FOREIGN KEY ("A") REFERENCES "Label"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LabelToRecipe" ADD CONSTRAINT "_LabelToRecipe_B_fkey" FOREIGN KEY ("B") REFERENCES "Recipe"("id") ON DELETE CASCADE ON UPDATE CASCADE;
