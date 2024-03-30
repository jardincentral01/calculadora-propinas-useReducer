import { useState } from "react"
import type { MenuItem, OrderItem } from "../types";

function useOrder(){

    const [order, setOrder] = useState<OrderItem[]>([]);
    const [tip, setTip] = useState(0);

    const MAX_ITEMS : number = 5

    const addOrderItem = (menuItem: MenuItem) =>{

        const orderItemExists = order.find(orderItemState => orderItemState.id == menuItem.id)

        if(orderItemExists){
            increaseQuantity(orderItemExists.id)
        }else{
            const orderItem : OrderItem = {...menuItem, quantity: 1}
            setOrder([...order, orderItem])
        }

    }

    const removeOrderItem = (id: OrderItem['id']) =>{
        const updatedOrder = order.filter(orderItemState => orderItemState.id !== id)
        setOrder(updatedOrder)
    }

    const increaseQuantity = (id: OrderItem['id']) => {

        const updatedOrder = order.map(orderItemState => (orderItemState.id == id && orderItemState.quantity < MAX_ITEMS) ? {...orderItemState, quantity: orderItemState.quantity + 1} : orderItemState)

        setOrder(updatedOrder)
    }

    const placeOrder = () => {
        setOrder([])
    }

    return {
        order,
        tip,
        setTip,
        addOrderItem,
        removeOrderItem,
        placeOrder,
    }
}

export default useOrder