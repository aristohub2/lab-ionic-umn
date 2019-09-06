import { Component, OnInit } from '@angular/core';
import { Recipes } from '../../models/recipes.model';
import { RecipesService } from 'src/app/service/recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  recipes: Recipes[];

  constructor(private recipesService: RecipesService){}

  ngOnInit() {
    this.recipes = this.recipesService.getAllRecipes();
    console.log(this.recipes)
  }
  
  ionViewWillEnter(){
    this.recipes = this.recipesService.getAllRecipes();
  }
}
