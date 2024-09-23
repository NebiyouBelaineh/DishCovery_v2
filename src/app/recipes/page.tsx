import Image from 'next/image'
import { Utensils } from 'lucide-react'
import SearchForm from '../components/SearchForm'
import RecipeCard from '../components/RecipeCard'
import { getRecipesByCategory } from '@/lib/api'
import Component from '../components/CarouselRecipe'

const categories = ['Breakfast', 'Lunch', 'Dinner', 'Snack', 'Teatime']

export default async function RecipesPage() {
  const recipesByCategory = await Promise.all(
    categories.map(async (category) => ({
      category,
      recipes: await getRecipesByCategory(category),
    }))
  )

  return (
    <div className="min-h-screen mt-10 text-dark dark:text-white mt-[150px] px-2 lg:px-1">
      <div className="relative h-[400px] flex items-center justify-center">
        <Image
          src="/images/sample-img.jpg"
          alt="Various food items"
          width={1280}
          height={400}
          className="brightness-50 h-[400px] w-[800px] rounded-lg lg:rounded-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
          <h1 className="text-4xl text-white md:text-5xl font-bold mb-4 text-center">Your desired dish?</h1>
          <SearchForm className="w-full max-w-2xl mb-4" />
          <p className="mt-4 text-lg text-white">Search any recipe e.g. burger, pizza, sandwich, toast.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <nav className="mb-8">
          <ul className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <li key={category}>
                <a href={`#${category.toLowerCase()}`}
                  className="text-dark dark:text-white hover:bg-black hover:bg-opacity-10 rounded-md p-2 transition-colors underline">
                  {category}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {recipesByCategory.map(({ category, recipes }) => (
          <section key={category} id={category.toLowerCase()} className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <Utensils className="mr-2" />
              {category}
            </h2>
            <div className="">
              <Component recipes={recipes}/>
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}