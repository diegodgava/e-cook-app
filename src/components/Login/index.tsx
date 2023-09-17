import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import capa from '../../images/back-photo.png';
import style from './Login.module.css';

function Login() {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const navigate = useNavigate();

  const handleclick = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    navigate('/meals');
    const emailLS = { email: userEmail };
    const emailStringfy = JSON.stringify(emailLS);
    localStorage.setItem('user', emailStringfy);
  };

  return (
    <div>
      <h1 className={style.titleLogin}>Login</h1>
      <form className={style.formContainer}>
        <input
          type="email"
          placeholder="Digite seu email"
          data-testid="email-input"
          onChange={(event) => setUserEmail(event.target.value)}
        />
        <input
          type="password"
          placeholder="Digite sua senha"
          data-testid="password-input"
          onChange={(event) => setUserPassword(event.target.value)}
        />
        <button
          className={style.btnLogin}
          type="submit"
          data-testid="login-submit-btn"
          onClick={handleclick}
        >
          Entrar
        </button>
      </form>
      <div>
        <img
          className={style.backPhoto}
          src={capa}
          alt=""
        />
      </div>
    </div>
  );
}

export default Login;
