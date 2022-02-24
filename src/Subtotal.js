import React from 'react'
import { useNavigate } from 'react-router-dom'
import CurrencyFormat from 'react-currency-format'
import { getBasketTotal } from './reducer'
import { useStateValue } from './StateProvider'
import './subtotal.css'

function Subtotal() {
  const navigate=useNavigate()
  const [{basket}]=useStateValue()
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} {basket?.length===1?'item':'items'}):<strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />
      <button disabled={basket.length<=0} onClick={e=>navigate('/payments')}>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal