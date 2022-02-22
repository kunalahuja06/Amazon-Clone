import React, {useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import './login.css';
import {auth} from './firebase'
function Login() {
    const navigate=useNavigate()
    const [email,setEmail]=useState('');
    const [password, setPassword] = useState('');
    const signIn=(e)=>{
        e.preventDefault()
        auth
            .signInWithEmailAndPassword(email,password)
            .then((auth)=>{
                if(auth){
                    navigate('/')
                }
            })
            .catch(e=>alert(e.message))
    }
    const register=(e)=>{
        e.preventDefault()
        auth
            .createUserWithEmailAndPassword(email,password)
            .then((auth)=>{
                if(auth){
                    navigate('/')
                }
            })
            .catch(e=>alert(e.message))
    }
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/905px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>Sign-in</h1>
        <form action="">
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="login__siginButton" type="submit" onClick={signIn}>
            Sign In
          </button>
        </form>
        <p>
          By continuing, you agree to Amazon's <span>Conditions of Use </span>
          and <span>Privacy Notice</span>.
        </p>
        <p className="login__new">New to Amazon?</p>
        <button className="login__registerButton" onClick={register}>
          Create Your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login