export interface Hit {
  recipe: {
    label: string
    image: string
  }
}
export interface Recipe {
    id: string
    label: string
    description: string
    image: string
    hits: Hit[]
    // Add more properties as needed
  }
  
