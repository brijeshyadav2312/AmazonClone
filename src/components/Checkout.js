import { Link } from 'react-router-dom'
import { useDispatch, useSelector,  } from 'react-redux'
import '../css/checkout.css'
import { removeProductsINCart } from '../redux/action'
import {FaCheckCircle} from 'react-icons/fa'
import { useEffect, useState } from 'react'
import cartEmpty from '../Assets/CartEmpty.svg'

const Checkout = () => {

    const [qty,setQty] = useState(1)
    const cardData = useSelector(state => state)
    const dispatch = useDispatch();
    console.log(cardData.Cart)

    useEffect(() => {
        
    },[qty])
    const setPrice = (qty, id) => {
           cardData.Cart.map((item) => {
                if(item.id === id){
                    item.Qty = qty;
                }
            })
    }
    const TotalPrice = cardData.Cart.length>0?cardData.Cart?.map((elem) => elem?.Qty?(elem.price*elem?.Qty):(elem.price))?.reduce((acc,curr) => acc+curr)*10:0

  return (
    <div className='checkoutSection'>
        { cardData.Cart.length>0?(
        <>
        <div className='detailsSection'>
            <div className='cartCardHeader'>
                <p>Shopping Cart</p>
                <p>Price</p>
            </div>
            { cardData?.Cart.map((item,idx) => {
                return(
                    <div key={idx} className='puductCard'>
                        <div className='cardProductDeatails'>
                            <img className='cartImage' alt='cartImage' src={item.image}/>
                            <div>
                                <p>{item.title}</p>
                                <p className='bestseller'>#1 Best Seller</p>
                                <p>In Stock</p>
                                <p>Eligible for FREE Shipping</p>
                                <span><input type='checkbox'/>This will be a giftThis is a gift</span>
                                <div className='selectOption'>
                                    <select
                                    onChange={(e) => {
                                        setPrice(e.target.value, item.id);
                                        setQty(e.target.value)
                                        }}>
                                        <option value={1}>Qty: 1</option>
                                        <option value={2}>Qty: 2</option>
                                        <option value={3}>Qty: 3</option>
                                        <option value={4}>Qty: 4</option>
                                        <option value={5}>Qty: 5</option>
                                        <option value={6}>Qty: 6</option>
                                    </select>
                                    <span onClick={() => dispatch(removeProductsINCart(item.id))}>Delete</span>
                                </div>
                            </div>
                        </div>
                        <p>
                            ₹ {item?.Qty?(((item.price * 10).toFixed(1) * ( item?.Qty)).toFixed(1)):((item.price * 10).toFixed(1))}
                        </p>
                    </div>
                )
            })
            }
            <div className='totalPrice'>Subtotal ({cardData.Cart.length}): ₹ {(TotalPrice).toFixed(1)}</div>
        </div>
        <div className='checkoutPrice'>
            <div className='checkoutCard'>
                <div><span><FaCheckCircle/></span><p>Your order is eligible for FREE Delivery. Select this option at checkout. Details</p></div>
                <div>Subtotal ({cardData.Cart.length} items): <span>₹&nbsp;{(TotalPrice).toFixed(1)}</span></div>
                <p><input type="checkbox"/>This order contains a gift</p>
                <p>Proceed to Buy</p>
            </div>
        </div>
        </>
        ):(
            <div className='empty'>
                <img width="450px" alt='empty' src={cartEmpty}/>
                <p>Your Shopping basket is empty ...</p>
                <Link to="/"><span>Back To Home</span></Link>
            </div>
        )
        }
    </div>
  )
}

export default Checkout
