export type TIngredient = {
    _id: string,
    name: string,
    type: string,
    proteins: number,
    fat: number,
    carbohydrates: number,
    calories: number,
    price: number,
    image: string,
    image_mobile: string,
    image_large: string
};

export type TIngredientConstructor = TIngredient & {id: string};

export type TSetModalState = 
    React.Dispatch<React.SetStateAction<{
        isOpen: boolean;
        chooseModal: null | JSX.Element;
        onClose: (() => void) | null
    }>>

export type TinputEvent = React.ChangeEvent<HTMLInputElement>;

export type TformEvent = React.FormEvent<HTMLFormElement>;

export type Tuser = {name: string, email: string} | null;

export type TAnswer = {
    name: string,
    order: {
        number: number
    },
    success: boolean}
