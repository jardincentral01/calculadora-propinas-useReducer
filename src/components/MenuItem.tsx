import { Dispatch } from "react"
import { cashify } from "../helpers"
import type { MenuItem } from "../types"
import { OrderActions } from "../reducers/order-reducer"

type MenuItemProps = {
    menuItem: MenuItem
    dispatch: Dispatch<OrderActions>
}

function MenuItem({menuItem, dispatch} : MenuItemProps) {

    return (
        <button onClick={() => dispatch({ type: "add-order_item", payload: { menuItem } })} className="border-2 border-teal-400 hover:bg-teal-200 rounded-md px-3 py-2 w-full flex justify-between transition-all">
            <p>{menuItem.name}</p>
            <p className="font-black text-lg">{cashify(menuItem.price)}</p>
        </button>
    )
}

export default MenuItem