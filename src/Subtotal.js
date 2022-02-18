import React from 'react'
import CurrencyFormat from 'react-currency-format'
import './subtotal.css'

function Subtotal() {
  return (
    <div className='subtotal'>
        <CurrencyFormat
        renderText={(value)=>(
            <>
            <p>Subtotal (0 items):<strong>0</strong></p>
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