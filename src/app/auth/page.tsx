'use client'

import { useState } from 'react'

export default function Auth() {
  const [isSignUp, setIsSignUp] = useState(true)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle form submission (to be implemented)
  }

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-green-800 text-center">{isSignUp ? 'Sign Up' : 'Sign In'}</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {isSignUp && (
          <input type="text" placeholder="Name" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500" required />
        )}
        <input type="email" placeholder="Email" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500" required />
        <input type="password" placeholder="Password" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500" required />
        <button type="submit" className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
          {isSignUp ? 'Sign Up' : 'Sign In'}
        </button>
      </form>
      <p className="mt-4 text-center text-gray-600">
        {isSignUp ? 'Already have an account?' : 'Don\'t have an account?'}
        <button onClick={() => setIsSignUp(!isSignUp)} className="ml-2 text-green-600 hover:text-green-800 transition-colors">
          {isSignUp ? 'Sign In' : 'Sign Up'}
        </button>
      </p>
    </div>
  )
}