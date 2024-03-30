import { cashify } from "../helpers"
import { OrderItem } from "../types"

type OrderContentProps = {
    order: OrderItem[],
    removeOrderItem: (id: OrderItem['id']) => void
}

function OrderContent({order, removeOrderItem} : OrderContentProps) {
    return (
        <>

            <div className="space-y-3 mt-10">
                {
                    order.map(orderItem => (
                        <div key={orderItem.id} className="flex justify-between items-center border-t border-gray-200 py-5 last-of-type:border-b">
                            <div>
                                <p className="text-lg">{orderItem.name} - {cashify(orderItem.price)}</p>
                                <p className="font-black">Cantidad: {orderItem.quantity} - {cashify(orderItem.price * orderItem.quantity)}</p>
                            </div>

                            <button onClick={() => removeOrderItem(orderItem.id)} className="bg-red-600 h-8 w-8 rounded-full text-white font-black">
                                X
                            </button>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default OrderContent