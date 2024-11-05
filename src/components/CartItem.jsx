
const CartItem = ({name, quantity, price, onAdd, onDelete}) => {

  return <li className='cart-item'>
    <p>{name} - {quantity} x ₹{price}</p>
    <p className='cart-item-actions'>
        <button onClick={onDelete}>-</button>
        <span>{quantity}</span>
        <button onClick={onAdd}>+</button>
    </p>
  </li>
  
}

export default CartItem
