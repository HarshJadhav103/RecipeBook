import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService{
    ingredientsChanged = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes',10),
    ];

    getIngredirents() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient : Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    addIngredients(ingrediens : Ingredient[]){
        this.ingredients.push(...ingrediens);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
}