import { error } from 'console';
import { Recipe } from './types'

const EDAMAM_APP_ID = process.env.EDAMAM_APP_ID;
const EDAMAM_APP_KEY = process.env.EDAMAM_APP_KEY;
const recipeParam = '';

const API_URL = `https://api.edamam.com/api/recipes/v2?type=public&\
app_id=${EDAMAM_APP_ID}&app_key=${EDAMAM_APP_KEY}`

export async function searchRecipes(query: string): Promise<Recipe[]> {
  try {
    const response = await fetch(`${API_URL}q=${encodeURIComponent(query)}`)
    if (!response.ok) {
      throw new Error('Failed to fetch recipes')
    }
    return response.json()
  } catch (error) {
    console.error('Error searching recipes:', error)
    return []
  }
}

export async function getRecipesByCategory(category: string): Promise<Recipe[]> {
  const url = `${API_URL}&mealType=${encodeURIComponent(category)}`;

  try {
    const response = await fetch(url);

    return response.json()
      .then(data => data.hits)
      .catch(error => {
        console.error('Failed to parse recipes:', error);
        throw new Error('Failed to parse recipes');
      });
  } catch (error) {
    console.error(`Error fetching ${category} recipes:`, error);
    return [];
  }
}

export async function getSavedRecipes(): Promise<Recipe[]> {
  // In a real application, this would fetch from your backend
  // For now, return an empty array to avoid runtime errors
  return []
}

export async function getSimilarRecipes(): Promise<Recipe[]> {
  // In a real application, this would fetch from your backend
  // For now, return an empty array to avoid runtime errors
  return []
}