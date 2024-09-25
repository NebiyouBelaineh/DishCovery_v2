'use client'
import { useState } from 'react'
import { searchRecipes } from '@/lib/api'

export default function SearchForm({ className }: { className: string }) {
  const [query, setQuery] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // TODO: handle search
    searchRecipes(query)
  }

  return (
    <div className={`flex items-center justify-start ${className}`}>
      <form onSubmit={handleSubmit} className="flex gap-2 w-full">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search recipes..."
          className="flex-grow p-2 border rounded-full"
          required
        />
        <button type="submit" className="bg-lime-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors">
          Search
        </button>
      </form>
    </div>
  )
}