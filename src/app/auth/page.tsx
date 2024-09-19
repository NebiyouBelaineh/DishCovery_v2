'use client'

import { useState } from 'react'

export default function Auth() {
  const [isSignUp, setIsSignUp] = useState(true)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle form submission
  }

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-4">{isSignUp ? 'Sign Up' : 'Sign In'}</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {isSignUp && (
          <input type="text" placeholder="Name" className="w-full p-2 border rounded" required />
        )}
        <input type="email" placeholder="Email" className="w-full p-2 border rounded" required />
        <input type="password" placeholder="Password" className="w-full p-2 border rounded" required />
        <button type="submit" className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700 transition-colors">
          {isSignUp ? 'Sign Up' : 'Sign In'}
        </button>
      </form>
      <p className="mt-4 text-center">
        {isSignUp ? 'Already have an account?' : 'Don\'t have an account?'}
        <button onClick={() => setIsSignUp(!isSignUp)} className="ml-2 text-green-600 hover:underline">
          {isSignUp ? 'Sign In' : 'Sign Up'}
        </button>
      </p>
    </div>
  )
}