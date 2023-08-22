import { RootState } from "../../store";
import { TIngredient } from "../../utils/types";

export const countSelector = (state: RootState, item?: TIngredient) => {

    // if (item == null) {
    //     return null
    // }
if(item) {
    if (item!.type === 'bun') {
        const bun = state.constructorBurger.bun;

        return bun && bun._id === item!._id ? 1 : 0;
    }
    else if (['sauce', 'main'].includes(item!.type)) {
        const elemsWithCounter = state.constructorBurger.mooved.filter((i: TIngredient) => i._id === item!._id);
        return elemsWithCounter.length;
    }

    return 0;
}
};

// const countSelector = (state: RootState) => {
//     if (item.type === 'bun') {
//         const bun = state.constructorBurger.bun;

//         return bun && bun._id === item._id ? 1 : 0;
//     }
//     else if (['sauce', 'main'].includes(item.type)) {
//         const elemsWithCounter = state.constructorBurger.mooved.filter((i: TIngredient) => i._id === ingredient._id);
//         return elemsWithCounter.length;
//     }

//     return 0;
// };