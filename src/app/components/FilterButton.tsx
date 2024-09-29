'use client'

import { useState, useEffect } from 'react'
import SearchByingredients  from './SearchByIngredients '

export default function FilterButton() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    // console.log('isModalOpen:', isModalOpen)
  }, [isModalOpen])

  const handleOpenModal = () => setIsModalOpen(true)
  const handleCloseModal = () => setIsModalOpen(false)

  const handleSubmitFilters = (filters: {
    ingredients: string[]
    cuisineType: string
    mealType: string
    dishType: string
  }) => {
    console.log('Filters:', filters)
    // Here you would typically update your recipe list based on the filters
    // For now, we'll just log the filters and close the modal
    handleCloseModal()
  }

  return (
    <>
      <button
        onClick={handleOpenModal}
        className="bg-violet-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-900"
      >
        Search by ingredients 
      </button>
      <SearchByingredients 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmitFilters}
      />
    </>
  )
}
