import SearchForm from '../components/SearchForm'
import RecipeCard from '../components/RecipeCard'
import { searchRecipes } from '@/lib/api'

export default async function Recipes({ searchParams }: { searchParams: { query?: string } }) {
  const recipes = searchParams.query ? await searchRecipes(searchParams.query) : []

  return (
    <div className='mt-[200px] flex justify-center'>
      <div className='w-[80%]'>
        <h1 className="text-3xl font-bold mb-4">Find Recipes</h1>
        <SearchForm />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </div>
    </div>
  )
}
