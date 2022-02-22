import './App.css';
import { useEffect} from 'react';
import Header from './Header'
import Home from './Home'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
function App() {
  const [{},dispatch]=useStateValue()
  useEffect(()=>{
    auth.onAuthStateChanged(authUser=>{
      if(authUser){
        dispatch({
          type:'SET_USER',
          user:authUser
        })
      }else{
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    })
  },[])
  return (
    <Router>
      <div className="App">
        
        <Routes>
          <Route path="/" element={[<Header/>,<Home/>]} />
          <Route path="/checkout" element={[<Header/>,<Checkout/>]}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
