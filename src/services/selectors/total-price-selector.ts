import { RootState } from "../../store";
import { TIngredientConstructor } from "../../utils/types/types";

export const totalPriceSelector = (state: RootState) => {
    const mooved = state.constructorBurger.mooved;
    const bun = state.constructorBurger.bun;
    const prices = mooved.map((item: TIngredientConstructor) => item.price);
    const bunPrice = bun ? bun.price * 2 : 0;

    return prices.reduce(function (previousValue: number, item: number) {
      return previousValue + item;
    }, 0) + bunPrice;
  };