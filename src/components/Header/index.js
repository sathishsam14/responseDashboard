import { useState } from 'react';
import {Navigate } from 'react-router-dom';
import { CiLight } from 'react-icons/ci';
import { MdDarkMode } from 'react-icons/md';
import { IoIosNotifications } from 'react-icons/io';
import './index.css';

const Header = (props) => {
  const { change, changeColor } = props;
  const [redirect, setRedirect] = useState(false);

  const handleNotificationClick = () => {
    setRedirect(true);
  };

  if (redirect) {
    return <Navigate to="/notification" />;
  }



  return (
    <div className={change ? 'header dark-mode' : 'header light-mode'}>
      <div>
        <h1 className="header-dash">DashBoard</h1>
      </div>
      <div className='div-container'>
        <input placeholder="Search" type="text" className="input-ele" />
       
        <button type="button" className="notify-button" onClick={handleNotificationClick}>
          <IoIosNotifications />
        </button>
        <button onClick={changeColor} type="button" className="icon-button">
          {change ? <MdDarkMode /> : <CiLight />}
        </button>
        <button className="button-element">LogOut</button>
        
      </div>
    </div>
  );
};

export default Header;


