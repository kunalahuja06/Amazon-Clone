import React from 'react'
import './payment.css'
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import { Link } from 'react-router-dom';

function Payment() {
    const [{basket,user}]=useStateValue()
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
            <div className="payment__details"></div>
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


