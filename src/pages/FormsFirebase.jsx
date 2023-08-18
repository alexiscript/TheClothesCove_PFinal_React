import React, { useState } from "react";
import "../context/auto/App.css";
import { useAuth } from "../context/auto/AuthContext";
import { useNavigate } from "react-router-dom";

function FormsFirebase() {
  const auth = useAuth();
  const navigate = useNavigate();

  const [emailRegister, setEmailRegister] = useState("");
  const [passwordRegister, setPasswordRegister] = useState(""); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const displayName = auth.user ? auth.user.displayName : null;
  const handleRegister = (e) => {
    e.preventDefault();
    auth.register(emailRegister, passwordRegister);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    await auth.login(email, password);

    setTimeout(() => {
      navigate("/checkout");
    }, 3000);
  };

  const handleGoogle = async (e) => {
    e.preventDefault();
    await auth.loginWithGoogle();
    setTimeout(() => {
      navigate("/checkout");
    }, 3000);
  };

 
  

  


  console.log(displayName)
  return (

    <div className="App d-flex justify-content-center">

      <div className="container2">

        <div className="heading">Registrarse</div>

        <form className="form">

          <input required onChange={(e) => setEmailRegister(e.target.value)} className="input" type="email" placeholder="E-mail" />
          <input required onChange={(e) => setPasswordRegister(e.target.value)} className="input" type="password" placeholder="Password" />
          <button className="login-button" onClick={(e) => handleRegister(e)} type="submit">Enviar</button>
        </form>



        <span className="agreement">Learn user licence agreement</span>
      </div>
      <div className="container2 ">

        <div className="heading">Cuenta</div>

        <form className="form">
          <input required="" onChange={(e) => setEmail(e.target.value)} className="input" type="email" placeholder="E-mail" />
          <input required onChange={(e) => setPassword(e.target.value)} className="input" type="password" placeholder="Password" />
          <button required className="login-button" onClick={(e) => handleLogin(e)} type="submit">Ingresar</button>
          {displayName && <h5>Hola : {displayName}</h5>}



          <div className="social-account-container">
            <span className="title">Or Sign in with</span>
            <div className="social-accounts">

              <button onClick={(e) => handleGoogle(e)} className="social-button google">
                <svg className="svg" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 488 512">
                  <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
                </svg>
              </button>

            </div>

          </div>
        </form>

      </div>


    </div>
  );
}

export default FormsFirebase;
