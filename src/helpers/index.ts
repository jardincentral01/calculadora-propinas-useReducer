

export const cashify = (price: number) =>{
    const newPrice = price.toLocaleString('es-MX', {style: 'currency', currency:"MXN"})
    return newPrice
}