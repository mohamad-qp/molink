import React from 'react';
import { Link } from 'react-router-dom';

const AdminHeader = ({ admin, settings, edit }) => {

  const logOut = () => {
    localStorage.removeItem('auth-token');
    window.location = '/';
  }

  return (
    <nav className="admin-header">
      <Link to='/admin' className={`header-links ${admin}`}>الروابط</Link>
      <Link to='/settings' className={`header-links ${settings}`}>أعدادات</Link>
      <Link to='/edit' className={`header-links ${edit}`}>تعديل الروابط</Link>
      <h1 className='header-links header-logout' onClick={logOut}>تسجيل خروج</h1>
    </nav>
  )
}

export default AdminHeader
