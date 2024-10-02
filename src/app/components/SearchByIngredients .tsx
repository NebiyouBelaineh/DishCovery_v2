'use client'

import { useState } from 'react'
import { X } from 'lucide-react'

type FilterOption = {
  label: string
  value: string
}

const cuisineTypes: FilterOption[] = [
  { label: '(Default) - Any', value: 'any' },
  { label: 'Italian', value: 'italian' },
  { label: 'Mexican', value: 'mexican' },
  { label: 'Asian', value: 'asian' },
  { label: 'French', value: 'french' },
  { label: 'American', value: 'american' },
]

const mealTypes: FilterOption[] = [
  { label: '(Default) - Any', value: 'any' },
  { label: 'Breakfast', value: 'breakfast' },
  { label: 'Lunch', value: 'lunch' },
  { label: 'Dinner', value: 'dinner' },
  { label: 'Snack', value: 'snack' },
  { label: 'Teatime', value: 'teatime' },
]

const dishTypes: FilterOption[] = [
  { label: '(Default) - Any', value: 'any' },
  { label: 'Main course', value: 'main course' },
  { label: 'Side dish', value: 'side dish' },
  { label: 'Dessert', value: 'dessert' },
  { label: 'Appetizer', value: 'appetizer' },
  { label: 'Salad', value: 'salad' },
  { label: 'Soup', value: 'soup' },
]

interface RecipeFilterModalProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (filters: {
    ingredients: string[]
    cuisineType: string
    mealType: string
    dishType: string
  }) => void
}

export default function SearchByIngredients({ isOpen, onClose, onSubmit }: RecipeFilterModalProps) {
  const [ingredients, setIngredients] = useState<string[]>([])
  const [newIngredient, setNewIngredient] = useState('')
  const [cuisineType, setCuisineType] = useState('any')
  const [mealType, setMealType] = useState('any')
  const [dishType, setDishType] = useState('any')

  const handleAddIngredient = () => {
    if (newIngredient.trim()) {
      setIngredients([...ingredients, newIngredient.trim()])
      setNewIngredient('')
    }
  }

  const handleRemoveIngredient = (ingredient: string) => {
    setIngredients(ingredients.filter((item) => item !== ingredient))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit({ ingredients, cuisineType, mealType, dishType })
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-40">
      <div className="rounded-lg shadow-xl w-full max-w-md bg-white dark:bg-black border border-stone-50 dark:border-stone-700 shadow-stone-400 dark:shadow-gray-700">
        <div className='flex justify-end'>
          <button onClick={onClose} className="relative top-2 right-2 p-2 bg-lime-600 rounded-full hover:bg-green-600">
            <X size={24} className="text-white" />
          </button>
        </div>
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4 text-dark dark:text-white">Ingredients Selection</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="ingredients" className="block text-sm font-medium text-dark dark:text-white mb-1">
                Add ingredients using the Add button
              </label>
              <div className="flex">
                <input
                  type="text"
                  id="ingredients"
                  value={newIngredient}
                  onChange={(e) => setNewIngredient(e.target.value)}
                  className="flex-grow p-2 rounded-l-md border-2 border-gray-300"
                  placeholder="Eggs, Tomato, Cheese, ..."
                />
                <button
                  type="button"
                  onClick={handleAddIngredient}
                  className="bg-lime-600 text-white px-4 py-2 rounded-r-md hover:bg-green-700 transition-colors"
                >
                  Add
                </button>
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                {ingredients.map((ingredient, index) => (
                  <span
                    key={index}
                    className="bg-lime-600 text-white px-2 py-1 rounded-full text-sm flex items-center"
                  >
                    {index + 1}. {ingredient}
                    <button
                      type="button"
                      onClick={() => handleRemoveIngredient(ingredient)}
                      className="ml-1 text-red-900 hover:text-red-700"
                    >
                      <X size={14} />
                    </button>
                  </span>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="cuisineType" className="block text-sm font-medium text-dark dark:text-white mb-1">
                Cuisine Type - Style of cooking
              </label>
              <select
                id="cuisineType"
                value={cuisineType}
                onChange={(e) => setCuisineType(e.target.value)}
                className="w-full p-2 rounded-md border-2 border-gray-300"
              >
                {cuisineTypes.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="mealType" className="block text-sm font-medium text-dark dark:text-white mb-1">
                Meal Type
              </label>
              <select
                id="mealType"
                value={mealType}
                onChange={(e) => setMealType(e.target.value)}
                className="w-full p-2 rounded-md border-2 border-gray-300"
              >
                {mealTypes.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-6">
              <label htmlFor="dishType" className="block text-sm font-medium text-dark dark:text-white mb-1">
                Dish Type
              </label>
              <select
                id="dishType"
                value={dishType}
                onChange={(e) => setDishType(e.target.value)}
                className="w-full p-2 rounded-md border-2 border-gray-300"
              >
                {dishTypes.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-lime-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
              >
                Find Recipe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
