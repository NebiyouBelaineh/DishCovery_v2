import Image from 'next/image'
import { Utensils } from 'lucide-react'
import SearchForm from '../components/SearchForm'
import FilterButton from '../components/FilterButton'
import { getRecipesByCategory } from '@/lib/api'
import CarouselRecipe from '../components/CarouselRecipe'

let cachedData: any = null;
let cachedTimeStamp = 0;
const cachedDuration = 1000 * 60 * 60 * 24; // 1 day

const categories = ['Breakfast', 'Lunch', 'Dinner', 'Snack', 'Teatime']

function generateRandomRecipe(id: number) {
  const adjectives = ['Delicious', 'Savory', 'Sweet', 'Spicy', 'Creamy', 'Crunchy', 'Tangy', 'Zesty']
  const foods = ['Pasta', 'Salad', 'Soup', 'Sandwich', 'Stir-fry', 'Curry', 'Casserole', 'Pie']
  const ingredients = ['Chicken', 'Beef', 'Tofu', 'Vegetables', 'Cheese', 'Rice', 'Noodles', 'Eggs']

  return {
    id: id.toString(),
    label: `${adjectives[Math.floor(Math.random() * adjectives.length)]} ${foods[Math.floor(Math.random() * foods.length)]}`,
    image: `https://picsum.photos/200/300?random=${id}`,
    ingredientLines: [
      `${Math.floor(Math.random() * 3) + 1} cups of ${ingredients[Math.floor(Math.random() * ingredients.length)]}`,
      `${Math.floor(Math.random() * 4) + 1} tablespoons of seasoning`,
      `${Math.floor(Math.random() * 2) + 1} cloves of garlic`,
    ],
  }
}

export default async function RecipesPage() {
  // Caching the data for 1 day before fetching from the API
  const currentTime = Date.now();
  let recipesByCategory: any;

  if (cachedData && currentTime - cachedTimeStamp < cachedDuration) {
    recipesByCategory = cachedData;
    cachedData = recipesByCategory;
    cachedTimeStamp = currentTime;
  } else {
    recipesByCategory = await Promise.all(
      categories.map(async (category) => ({
        category,
        recipes: await getRecipesByCategory(category),
        // recipes: Array.from({ length: 20 }, (_, i) => generateRandomRecipe(i + 1)),
      }))
    );
  }

  return (
    <div className="min-h-screen mt-10 text-dark dark:text-white mt-[150px] px-2 md:px-4">
      <div className="relative h-[400px] w-[80%] mx-auto flex items-center justify-center bg-lime-900 rounded-3xl lg:rounded-full md:w-[70%]">
        <Image
          src="/images/undraw_cooking_p7m1.svg"
          alt="Various food items"
          width={1280}
          height={400}
          className="h-[95%] w-auto"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-end p-4 rounded-full">
          <h1 className="text-4xl z-10 text-lime-400 md:text-5xl font-bold my-4 text-center bg-stone-800 bg-opacity-80 rounded-full">Your desired dish?</h1>
          <SearchForm className="w-full max-w-2xl mb-4" />
          <FilterButton />
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

        {recipesByCategory.map(({ category, recipes }: { category: string, recipes: any[] }) => (
          <section key={category} className="mb-12">
            <h2 id={category.toLowerCase()} className="text-2xl font-semibold mb-4 flex items-center">
              <Utensils className="mr-2" />
              {category}
            </h2>
            <div className="flex justify-center">
              {/* {recipes.map((recipe, index) => ( */}
              <CarouselRecipe recipes={recipes} category={category} />
              {/* ))} */}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}