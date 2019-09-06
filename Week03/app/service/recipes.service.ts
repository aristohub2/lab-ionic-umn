import { Injectable } from '@angular/core';
import { Recipes } from '../models/recipes.model';

@Injectable({
    providedIn: 'root'
})

export class RecipesService {

    recipes: Recipes[] = [
        {
            id: '001',
            title: 'Gado-gado',
            imageUrl: 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2016/05/gado-gado-salad.jpg?itok=MTTSriC8',
            ingredients: [
                'Indonesian Tofu',
                'Potatoes',
                'Peanut Butter',
                'Beansprouts',
            ],
            dontInclude: [
                'Kacang Tanah',
                'Anggur Merah',
                'Susu Kambing'
            ],
        },
        {
            id: '002',
            title: 'Courgette salad',
            imageUrl: 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--4303_11.jpg?itok=K7i_jqAU',
            ingredients: [
                'Courgettes',
                'Olive Oil',
                'Clear Honey',
                'Garlic'
            ],
            dontInclude: [
                'Kacang Tanah',
                'Anggur Merah',
                'Susu Kambing'
            ],
        },
        {
            id: '003',
            title: 'Spicy mince & lettuce cups',
            imageUrl: 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--424667_11.jpg?itok=F8Crp-Z2',
            ingredients: [
                'Sunflower Oil',
                'Fish Sauce',
                'Brown Sugar'
            ],
            dontInclude: [
                'Kacang Tanah',
                'Anggur Merah',
                'Susu Kambing'
            ],
        },
        {
            id: '004',
            title: 'Mango chutney & chicken sliders',
            imageUrl: 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2019/07/mango-chutney-chicken-sliders.jpg?itok=GiY1qXu1',
            ingredients: [
                'Natural Yogurt',
                'Mayonnaise',
                'Red Onion',
                'Red Chili'
            ],
            dontInclude: [
                'Kacang Tanah',
                'Anggur Merah',
                'Susu Kambing'
            ],
        },
        {
            id: '005',
            title: 'Spicy mince & lettuce cups',
            imageUrl: 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--424667_11.jpg?itok=F8Crp-Z2',
            ingredients: [
                'Sunflower Oil',
                'Fish Sauce',
                'Brown Sugar'
            ],
            dontInclude: [
                'Kacang Tanah',
                'Anggur Merah',
                'Susu Kambing'
            ],
        },
        {
            id: '006',
            title: 'Tahini banana cake',
            imageUrl: 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2019/07/tahini-banana-cake.jpg?itok=c0ibtfvI',
            ingredients: [
                'Unsalted Butter',
                'Tahini',
                'Banana'
            ],
            dontInclude: [
                'Kacang Tanah',
                'Anggur Merah',
                'Susu Kambing'
            ],
        },
        {
            id: '007',
            title: 'Creamy chicken, bean & leek traybake',
            imageUrl: 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2019/08/creamy-chicken-bean-leek-traybake.jpg?itok=kNA2S6cF',
            ingredients: [
                'Olive Oil',
                'Chicken Kampung',
                'Bean',
                'Bango Ketchup'
            ],
            dontInclude: [
                'Kacang Tanah',
                'Anggur Merah',
                'Susu Kambing'
            ],
        },
        {
            id: '008',
            title: 'Spicy harissa aubergine pie',
            imageUrl: 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2019/08/spicy-harissa-aubergine-pie.jpg?itok=OO6vy4vg',
            ingredients: [
                'Olive Oil',
                'Aubergine',
                'Korean Green Chili'
            ],
            dontInclude: [
                'Kacang Tanah',
                'Anggur Merah',
                'Susu Kambing'
            ],
        }
      ]

      constructor() { }

    getAllRecipes(){
        return [...this.recipes];
    }

    getRecipes(rId: string){
        return{
            ...this.recipes.find(recipe => {
                return recipe.id === rId
            })
        }
    }
    deleteRecipes(rId: string){
        this.recipes=this.recipes.filter((f)=>{
            return (f.id !== rId);
        })
    }
}