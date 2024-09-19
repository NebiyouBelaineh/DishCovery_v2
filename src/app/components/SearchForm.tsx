'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function SearchForm() {
  const [query, setQuery] = useState('')
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    router.push(`/recipes?query=${encodeURIComponent(query)}`)
  }

  return (
    <div className='flex items-center justify-start mt-12'>
      <form onSubmit={handleSubmit} className="flex gap-2 w-1/2">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search recipes..."
          className="flex-grow p-2 border rounded-full"
          required
        />
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors">
          Search
        </button>
      </form>
    </div>
  )
}