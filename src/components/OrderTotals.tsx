import { Dispatch, useMemo } from "react"
import { OrderItem } from "../types"
import { cashify } from "../helpers"
import { OrderActions } from "../reducers/order-reducer"

type OrderTotalsProps = {
    order: OrderItem[]
    tip: number
    isEmpty: boolean
    dispatch: Dispatch<OrderActions>
}

function OrderTotals({order, tip, isEmpty, dispatch} : OrderTotalsProps) {

    
    const getSubtotal = useMemo(() => order.reduce((acc, orderItemState) => acc + (orderItemState.quantity * orderItemState.price), 0), [order])
    const getTip = useMemo(() => getSubtotal * tip, [order, tip])
    const getTotal = useMemo(() => getSubtotal + getTip, [order, tip])
    // * PODEMOS USAR useCallback() en lugar de useMemo()
    // * LO QUE CAMBIA ES QUE NOS DEVUELVE OTRA FUNCION EN LUGAR DE VARIABLE

    return (
        <>
            {!isEmpty && (
                <div className="space-y-3">
                    <h2 className="font-black text-2xl">Totales y Propina: </h2>

                    <p>
                        Subtotal a Pagar: <span className="font-bold">{cashify(getSubtotal)}</span>
                    </p>
                    <p>
                        Propina: <span className="font-bold">{cashify(getTip)}</span>
                    </p>
                    <p>
                        Total a Pagar: <span className="font-bold">{cashify(getTotal)}</span>
                    </p>
                </div>
            )}

            <button
                onClick={() => dispatch({ type: "place-order" })} 
                className="uppercase w-full bg-black p-3 text-white font-bold mt-10 disabled:opacity-10" 
                disabled={isEmpty}>
                    {isEmpty ? "No Hay Items Agregados" : "Guardar Orden"}
            </button>
        </>
    )
}

export default OrderTotals