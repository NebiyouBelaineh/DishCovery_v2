import Image from 'next/image'
import { Recipe } from '@/lib/types'

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg">
      <Image src={recipe.image} alt={recipe.title} width={400} height={300} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
        <p className="text-gray-600 mb-4">{recipe.description}</p>
        <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors">
          View Recipe
        </button>
      </div>
    </div>
  )
}
