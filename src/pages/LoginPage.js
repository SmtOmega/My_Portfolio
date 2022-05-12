import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Alert from "../components/Alert";
import { useAppContext } from "../context/appContext";
import "../css/LoginPage.css";

const LoginPage = () => {
  const navigate = useNavigate()
  const { displayAlert, showAlert, loginUser, user } = useAppContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentUser = { email, password };
    if (!email || !password) {
      displayAlert();
      return;
    } else {

      loginUser(currentUser);
    }
  };

  useEffect(() => {
    if(user){
      setTimeout(() => {
        navigate('/')
      }, 3001)
    }
  }, [user, navigate])
  return (
    <div className="loginPage-container">
      <form className="loginForm-container" onSubmit={handleSubmit}>
        <h2>Login to Admin page</h2>
        {showAlert && <Alert />}
        <div className="loginForm-group">
          <label htmlFor="email">Login Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={emailHandler}
          />
        </div>
        <div className="loginForm-group">
          <label htmlFor="password">Login Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={passwordHandler}
          />
        </div>
        <button className="loginForm-btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
