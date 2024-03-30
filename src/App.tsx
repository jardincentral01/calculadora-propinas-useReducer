import { useReducer, useMemo } from "react";
import { menuItems } from "./data/db"
import { orderReducer, initialState } from "./reducers/order-reducer";
import MenuItem from "./components/MenuItem"
import OrderContent from "./components/OrderContent";
import OrderTotals from "./components/OrderTotals";
import TipForm from "./components/TipForm";

function App() {

    //const { order, tip, setTip, isEmpty, addOrderItem, removeOrderItem, placeOrder } = useOrder();
    const [state, dispatch] = useReducer(orderReducer, initialState)
    const { order, tip } = state
    /* useEffect(() => {
        if(isEmpty) setTip(0)
    }, [order]) */

    const isEmpty = useMemo(() => order.length <= 0, [order])

	return (
		<>
            <header className="bg-teal-400 py-5">
                <h1 className="text-center text-4xl font-black">Calculadora de Propinas</h1>
            </header>

            <main className="container mx-auto py-16 grid md:grid-cols-2">
                <div className="p-5">
                    <h2 className="text-3xl font-bold">Menú</h2>

                    <div className="space-y-3 mt-10">
                        {menuItems.map(menuItem => (
                            <MenuItem 
                                key={menuItem.id} 
                                menuItem={menuItem}
                                dispatch={dispatch}
                            />
                        ))}
                    </div>
                </div>
                
                <div className="p-5 border border-dashed border-slate-300 space-y-10 rounded-lg">
                    <h2 className="text-3xl font-bold">Resumen</h2>
                    
                    {!isEmpty ? (
                        <>
                            <OrderContent
                                order={order}
                                dispatch={dispatch}
                            />

                            <TipForm 
                                tip={tip} 
                                dispatch={dispatch}
                            />
                        </>
                    ) : (
                        <p className="text-center">La Orden está Vacía</p>
                    )}
                    

                    <OrderTotals
                        order={order}
                        tip={tip}
                        isEmpty={isEmpty}
                        dispatch={dispatch}
                    />
                </div>
            </main>
		</>
	)
}

export default App
