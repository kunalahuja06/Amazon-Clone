import React, { useEffect, useState } from 'react'
import './payment.css'
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import { Link, useNavigate } from 'react-router-dom';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from './axios';

function Payment() {
    
    const [{basket,user},dispatch]=useStateValue()
    const navigate = useNavigate();

    const stripe=useStripe()
    const elements=useElements()

    const [processing,setProcessing]=useState('')
    const [succeeded,setSucceeded]=useState(false)
    const [error,setError]=useState(null)
    const [disabled,setDisabled]=useState(true)
    const [clientSecret,setClientSecret]=useState('')

    useEffect(() => {
      // generate the special stripe secret which allows us to charge a customer
      const getClientSecret = async () => {
        const response = await axios({
          method: "post",
          // Stripe expects the total in a currencies subunits
          url: `/payments/create?total=${getBasketTotal(basket)*100}`,
        });
        
        setClientSecret(response.data.clientSecret);
      }
      getClientSecret();
    }, [basket]);

    const handleSubmit=async(e)=>{
      e.preventDefault()
      setProcessing(true)
      const payload=await stripe.confirmCardPayment(clientSecret,{
        payment_method:{
          card:elements.getElement(CardElement)
        }
      }).then(({paymentIntent})=>{
        setSucceeded(true)
        setError(null)
        setProcessing(false)
        dispatch({
          type:'EMPTY_BASKET'
        })
        navigate('/orders')
      })
    }
    const handleChange=(e)=>{
      setDisabled(e.empty)
      setError(e.error?e.error.message:'')
    }
  return (
    <div className="payment">
      <h1>
        Checkout(
        <Link to="/checkout">
          {basket.length} {basket.length === 1 ? "item" : "items"}
        </Link>
        )
      </h1>
      <div className="payment__container">
        <div className="payment__container__details">
          <div className="payment__section">
            <div className="payment__title">
              <h3>Delivery Address</h3>
            </div>
            <div className="payment__address">
              <p>{user?.email}</p>
              <p>Beside,Honda Showrorm, Tikrapara</p>
              <p>Kanker, Chhatttisgarh</p>
            </div>
          </div>
          <div className="payment__section">
            <div className="payment__title">
              <h3>Review items and Delivery</h3>
            </div>
            <div className="payment__items">
              {basket.map((item) => (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              ))}
            </div>
          </div>
          <div className="payment__section">
            <div className="payment__title">
              <h3>Payment method</h3>
            </div>
            <div className="payment__details">
              <form onSubmit={handleSubmit}>
                <CardElement onChange={handleChange} />
                <div className="payment__price__container">
                  <CurrencyFormat
                    renderText={(value) => (
                      <>
                          <h3>Order Total:{value}</h3>
                      </>
                    )}
                    decimalScale={2}
                    value={getBasketTotal(basket)}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"₹"}
                  />
                  <button disabled={processing || disabled || succeeded}><span>{processing ?<p>processing</p>:'Buy Now'}</span></button>
                </div>
                  {error && <div>{error}</div>}
              </form>
            </div>
          </div>
        </div>
        <div className="payment__container__summary">
          <div className="summary__title">
            <h3>Order Summary</h3>
          </div>
          <div className="summary__details">
            <div className="items">
              <div>
                <p>Items:</p>
              </div>
              {/*  */}
              <CurrencyFormat
                renderText={(value) => (
                  <>
                    <div className="price">
                      <p>{value}</p>
                    </div>
                  </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₹"}
              />
            </div>
            <div className="delivery">
              <div>
                <p>Delivery:</p>
              </div>
              {/*  */}
              <div className="price">
                <p>₹0.00</p>
              </div>
            </div>
          </div>
          <div className="summary__total">
            <div>
              <div className="title">
                <h3>Order Total</h3>
              </div>
              {/*  */}
              <CurrencyFormat
                renderText={(value) => (
                  <>
                    <div className="price">
                      <h3>{value}</h3>
                    </div>
                  </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₹"}
              />

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment


