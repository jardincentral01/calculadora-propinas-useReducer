import { menuItems } from "./data/db"
import useOrder from "./hooks/useOrder"
import MenuItem from "./components/MenuItem"
import OrderContent from "./components/OrderContent";
import OrderTotals from "./components/OrderTotals";
import TipForm from "./components/TipForm";

function App() {

    const { order, tip, setTip, isEmpty, addOrderItem, removeOrderItem, placeOrder } = useOrder();

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
                                addOrderItem={addOrderItem}
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
                            removeOrderItem={removeOrderItem}
                            />

                            <TipForm tip={tip} setTip={setTip}/>
                        </>
                    ) : (
                        <p className="text-center">La Orden está Vacía</p>
                    )}
                    

                    <OrderTotals
                        order={order}
                        tip={tip}
                        isEmpty={isEmpty}
                        placeOrder={placeOrder}
                    />
                </div>
            </main>
		</>
	)
}

export default App
