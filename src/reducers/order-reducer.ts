import type {MenuItem, OrderItem} from '../types';

// Declaracion de acciones / funciones
export type OrderActions =
    {type: 'add-item', payload : {item : MenuItem}} |
    {type: 'remove-item', payload : {id : MenuItem['id']}} |
    {type: 'place-order' } |
    {type: 'add-tip', payload : {value : number} }

// Declaramos el type que utilizan nuestras variables
export type OrderState = {
    order: OrderItem[],
    tip : number
}

// Inicializamos las variables
export const initialState = {
    order: [],
    tip : 0
}

export const orderReducer = (
    state: OrderState = initialState,
    action: OrderActions 
) => {

    // Anadir item
    if(action.type === 'add-item') {

        const itemExist = state.order.find((orderItem) => orderItem.id === action.payload.item.id);
        let order : OrderItem[] = [] // OrderItem[] es el valor que espera
        if (itemExist) { // actualiza la cantidad de items pero no aumenta el numero de arreglos con el mismo item

             order = state.order.map(orderItem => orderItem.id === action.payload.item.id ? 
                {...orderItem, quantity : orderItem.quantity + 1} : 
                orderItem) 

        } else {
        const newItem : OrderItem = { ...action.payload.item, quantity: 1 }; // evita el error de los items sin quantity
        order = [...state.order, newItem]
        }

        return {
            ...state,
            order
        }
    }

    // Eliminar item
    if(action.type === 'remove-item') {

        const order = state.order.filter(item => item.id !== action.payload.id)
        return {
            ...state,
            order
        }
    }

    // Guardar orden y reiniciar valores
    if(action.type === 'place-order') {
        return {
            ...state,
            order: [],
            tip : 0
        }
    }

    // Anadir propinas
    if(action.type === 'add-tip') {
        const tip = action.payload.value
        return {
            ...state,
            tip
        }
    }

    return state
}