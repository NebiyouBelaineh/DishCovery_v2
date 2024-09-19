import RecipeCard from '../components/RecipeCard'
import { getSavedRecipes, getSimilarRecipes } from '@/lib/api'

export default async function Dashboard() {
  const savedRecipes = await getSavedRecipes()
  const similarRecipes = await getSimilarRecipes()

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Your Dashboard</h1>
      <section>
        <h2 className="text-2xl font-semibold mb-4">Saved Recipes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {savedRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </section>
      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Similar Recipes You Might Like</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {similarRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </section>
    </div>
  )
}
