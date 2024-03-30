

const tipOptions = [
    {
        id: "tip-10",
        value: 0.1,
        label: "10%"
    },
    {
        id: "tip-20",
        value: 0.2,
        label: "20%"
    },
    {
        id: "tip-50",
        value: 0.5,
        label: "50%"
    }
]

type TipFormProps = {
    tip: number
    setTip: React.Dispatch<React.SetStateAction<number>>
}

function TipForm({tip, setTip} : TipFormProps) {
    
    return (
        <div className="space-y-5">
            <h3 className="text-2xl font-black">Propina:</h3>

            <form className="flex justify-around items-center">
                {tipOptions.map(tipOption => (
                    <div key={tipOption.id} className="w-24 h-10 relative">
                        <input className="peer block absolute top-0 left-0 right-0 bottom-0 opacity-[0.01] z-[100] " onChange={(e) => setTip(+e.target.value)} type="radio" id={tipOption.id} name="tip" value={tipOption.value} checked={tipOption.value == tip}/>
                        <label className="block absolute top-0.5 left-0.5 z-[90] px-5 py-2 rounded-lg peer-checked:bg-teal-200 border-2 border-teal-300 cursor-pointer hover:bg-teal-100 transition-all" htmlFor={tipOption.id}>{tipOption.label}</label>
                    </div>
                ))}
            </form>
        </div>
    )
}

export default TipForm