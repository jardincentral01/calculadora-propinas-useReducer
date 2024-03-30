import { cashify } from "../helpers"
import type { MenuItem } from "../types"

type MenuItemProps = {
    menuItem: MenuItem
    addOrderItem: (menuItem: MenuItem) => void
}

function MenuItem({menuItem, addOrderItem} : MenuItemProps) {

    return (
        <button onClick={() => addOrderItem(menuItem)} className="border-2 border-teal-400 hover:bg-teal-200 rounded-md px-3 py-2 w-full flex justify-between transition-all">
            <p>{menuItem.name}</p>
            <p className="font-black text-lg">{cashify(menuItem.price)}</p>
        </button>
    )
}

export default MenuItem