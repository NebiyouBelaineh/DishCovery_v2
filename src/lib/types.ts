export interface Hit {
  recipe: {
    label: string
    image: string
  }
}
export interface Recipe {
  recipe: {
    image: string;
    label: string;
    category: string;
    ingredientLines: string[];
  }
}
