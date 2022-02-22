import React from 'react'
import './checkout.css'
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal'
import CheckoutProduct from './CheckoutProduct'
function Checkout() {
  const [{basket,user}] =useStateValue()
  const clickhandle = () => {
    // if(user){
    //   const email=user.email
    //   console.log(email)
    // }
  };
  return (
    <div className="checkout">
      <div className="checkout__items">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="amazon ad"
        />
        <div>
          <h3 className='checkout__greet'>Hello, {user?user.email:'Guest'}</h3>
          <h1 className="checkout__title">Your Shopping Basket</h1>
          {/* <button onClick={clickhandle}>Click me</button> */}
          {
            basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            )
          )}
        </div>
      </div>
      <div className="checkout__subtotal">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout