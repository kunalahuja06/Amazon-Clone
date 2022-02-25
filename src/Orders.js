import React, { useState, useEffect } from "react";
import { db } from "./firebase";
import "./orders.css";
import { useStateValue } from "./StateProvider";
import Order from "./Order";
import { Link } from "react-router-dom";

function Orders() {
  const [{ user }] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) =>
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <div className="orders">
      <h1>Your Orders</h1>

      <div className="orders__order">
        {orders?.map((order) => (
          <Order order={order} />
        ))}
      </div>
      <div>
        <Link to="/">
          <p className="orders__back">Back to Home</p>
        </Link>
      </div>
    </div>
  );
}

export default Orders;
