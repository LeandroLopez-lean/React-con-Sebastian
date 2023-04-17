import carrito from './assets/carrito.png'

const CartWidget = ()=> {
    return(
        <div>
             <img className='img' src={carrito} alt="Carrito de compras" />
            
        </div>
    )
}

export default CartWidget;