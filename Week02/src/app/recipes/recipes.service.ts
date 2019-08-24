import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes:Recipe[]=[
    {
      id: 'r1',
      title:"Gado-gado",
      imageUrl:"asdasd",
      ingredients:['Lontong','Sawi','Bumbu Kecap']
    },
  ]
  constructor() { }
  
  getAllRecipes(){
    // console.log(this.recipes);
    return [...this.recipes];
  }
  getRecipe(recipeId: string){
    console.log(recipeId);
  }
}
