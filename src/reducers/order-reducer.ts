import { MenuItem, OrderItem } from "../types"

export type OrderActions = 
    { type: "add-order_item", payload: { menuItem: MenuItem } } |
    { type: "remove-orderItem", payload: { id: OrderItem['id'] } } |
    { type: "increase-quantity", payload: { id: OrderItem['id'] } } |
    { type: "add-tip", payload: { tip: number } } |
    { type: "place-order" }

export type OrderState = {
    order: OrderItem[]
    tip: number
}

export const initialState : OrderState = {
    order: [],
    tip: 0
}

const MAX_ITEMS = 5;

export const orderReducer = (
    state: OrderState = initialState,
    action: OrderActions
) =>{


    if(action.type == "add-order_item"){
        let updatedOrder : OrderItem[] = []

        const orderItemExists = state.order.some(orderItemState => orderItemState.id == action.payload.menuItem.id)
        if(orderItemExists){
            updatedOrder = state.order.map(orderItemState => (orderItemState.id == action.payload.menuItem.id && orderItemState.quantity < MAX_ITEMS) ? {...orderItemState, quantity: orderItemState.quantity + 1} : orderItemState)
        }else{
            const orderItem : OrderItem = {...action.payload.menuItem, quantity: 1}
            updatedOrder = [...state.order, orderItem]
        }

        return {
            ...state,
            order: updatedOrder
        }
    }

    if(action.type == "remove-orderItem"){
        const updatedOrder = state.order.filter(orderItem => orderItem.id != action.payload.id)
        return {
            ...state,
            order: updatedOrder
        }
    }

    if(action.type == "increase-quantity"){
        const updatedOrder = state.order.map(orderItemState => (orderItemState.id == action.payload.id && orderItemState.quantity < MAX_ITEMS) ? {...orderItemState, quantity: orderItemState.quantity + 1} : orderItemState)

        return {
            ...state,
            order: updatedOrder
        }
    }

    if(action.type == "add-tip"){
        return {
            ...state,
            tip: action.payload.tip
        }
    }

    if(action.type == "place-order"){
        return {
            order: [],
            tip: 0
        }
    }

    return state
}