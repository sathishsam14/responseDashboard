import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import Sidebar from '../Sidebar';
import Header from '../Header';
import Footer from '../Footer'
import { LuBellRing } from "react-icons/lu"
import './index.css'

const Notification = () => {
  const [change, setChange] = useState(false);
  const navigate = useNavigate()

  const handleBoard=()=>(
    navigate('/')
  )

  return (
    <div className={change ? 'dark-mode' : 'light-mode'}>
      <div className="main-con">
        <Sidebar change={change} />
        <div>
          <Header change={change} changeColor={() => setChange(!change)} />
          <div className="content-notify">
            <div className="chart-con">
            <LuBellRing className='notify-icon'/>
              <h2>No notifications yet</h2>
              <p>When you get notifications, they'll how up here</p>
              <button onClick={handleBoard} className="back-btn">Go to dashboard</button>
            </div>
          </div>
        </div>
      </div>
      <Footer change={change}/>
    </div>
  );
};

export default Notification;
