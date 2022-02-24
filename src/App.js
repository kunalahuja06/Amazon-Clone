import './App.css';
import { useEffect} from 'react';
import Header from './Header'
import Home from './Home'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { loadStripe } from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import Payment from './Payment';
import Orders from './Orders'

const promise = loadStripe("pk_test_51KWL6JSBxsTRa9UceYk3rvlgvfVSb0FtOdwk5wXNOJXPvuqYY5JcKokjfgyAU7PkfLFocBxjCs7B6PqoCUuDcHjZ00XmC5ViiK");


function App() {
  const [,dispatch]=useStateValue()
  useEffect(()=>{
    auth.onAuthStateChanged(authUser=>{
      if(authUser){
        dispatch({
          type:'SET_USER',
          user:authUser
        })
      }else{
        dispatch({
          type: "REMOVE_USER",
          user: null,
        });
      }
    })
  },[])
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={[<Header />, <Home />]} />
          <Route path="/checkout" element={[<Header />, <Checkout />]} />
          <Route path="/login" element={<Login />} />
          <Route path="/orders" element={[<Orders />]} />
          <Route
            path="/payments"
            element={[
              <Header />,
              <Elements stripe={promise}>
                <Payment />
              </Elements>,
            ]}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
