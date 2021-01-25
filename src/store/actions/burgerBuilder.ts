import { Ingredient } from '../../components/Burger/BurgerIngredient';

export type AddIngredientsActionType = {
  type: 'ADD_INGREDIENTS';
  payload: {
    ingredientName: Ingredient;
  };
};

export type RemoveIngredientsActionType = {
  type: 'REMOVE_INGREDIENTS';
  payload: {
    ingredientName: Ingredient;
  };
};

export type ResetIngredientsActionType = {
  type: 'RESET_INGREDIENTS';
};

export type FetchIngredientsFaildActionType = {
  type: 'FETCH_INGREDIENTS_FAILED';
};
