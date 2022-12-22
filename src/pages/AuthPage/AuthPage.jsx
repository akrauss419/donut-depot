import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import './AuthPage.css';

export default function AuthPage({ setUser }) {
  const [showSignUp, setShowSignUp] = useState(false);
  return (
    <main>
      <img src="https://i.ibb.co/58BMdks/Screen-Shot-2022-12-22-at-6-34-52-AM-removebg-preview.png"/>
      <h1 className="AuthHeadline">AuthPage</h1>
      <button onClick={() => setShowSignUp(!showSignUp)} className="LogInButton">{showSignUp ? 'Log In' : 'Sign Up'}</button>
      { showSignUp ?
          <SignUpForm setUser={setUser} />
          :
          <LoginForm setUser={setUser} />
      }
    </main>
  );
}