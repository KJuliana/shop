import {useAppSelector} from "./redux";

export const useTotalCountProduct = () => {
    const basket = useAppSelector(state => state.basket);

    let basketCount = 0;

    for (let key in basket) {
        basketCount += basket[key];
    }

    return basketCount;
}