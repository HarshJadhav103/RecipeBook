import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";
import { Subject } from "rxjs";

@Injectable()
export class RecipeService{
    recipesChanged = new Subject<Recipe[]>();

    private recipes:Recipe[] = [
        new Recipe(
            'Tasty Schnitzel',
            'Nice, Crispy and Spicy Schnitzel', 
            'https://mydinner.co.uk/wp-content/uploads/2022/02/cordon-blue-schnitzel-1.jpg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20)
            ]),
        new Recipe(
            'Double Patty Burger',
            'Nice and Fat Double patty Burger', 
            'https://www.eatthis.com/wp-content/uploads/sites/4/2022/04/burger-fries.jpg?quality=82&strip=all',
            [
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 1)
            ])
    ];

    constructor(private slService:ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index :number ) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients : Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe:Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index : number) {
        this.recipes.splice(index,1);
        this.recipesChanged.next(this.recipes.slice());
    }
}