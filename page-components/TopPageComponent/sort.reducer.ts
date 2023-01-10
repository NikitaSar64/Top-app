import { ca } from "date-fns/locale";
import { SortEmun } from "../../components/Sort/Sort.props"
import { ProductModel } from "../../interfaces/product.interface";

export type SortActions = { type: SortEmun.Price } | { type: SortEmun.Rating };

export interface SortReducerState {
    sort: SortEmun;
    products: ProductModel[];
}

export const sortReducer = ( state: SortReducerState, action: SortActions ) : SortReducerState => {
    switch (action.type){
        case SortEmun.Rating:
            return {
                sort: SortEmun.Rating,
                products: state.products.sort((a, b) => a.initialRating > b.initialRating ? -1 : 1)
            };
        case SortEmun.Price:
            return {
                sort: SortEmun.Price,
                products: state.products.sort((a, b) => a.price > b.price ? 1 : -1)
            };
        default: 
            throw new Error('Неверный тип сортировки');
    }
};