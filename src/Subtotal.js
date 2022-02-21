import React from 'react'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider'
import './subtotal.css'

function Subtotal() {
  const [{basket},action]=useStateValue()
  return (
    <div className='subtotal'>
        <CurrencyFormat
        renderText={(value)=>(
            <>
            <p>Subtotal ({`${basket.length} items`}):<strong>0</strong></p>
            <small className='subtotal__gift'>
                <input type="checkbox" />This order contains a gift
            </small>
            </>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"&#8377"}
        />
        <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal