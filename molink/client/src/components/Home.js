import React from 'react';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div className="green-container">
      <div className="buttons">
        <Link to='/login' className="sign-in-button">
          <p>تسجيل دخول</p>
        </Link>
        <span id="or">أو</span>
        <Link to='/signup' className="sign-in-button">
          <p>أنشاء حساب جديد</p>
        </Link>
      </div>
    </div>
  )
}

export default Home
