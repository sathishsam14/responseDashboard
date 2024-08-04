import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaBars } from 'react-icons/fa';
import { LiaTableSolid } from 'react-icons/lia';
import { IoMdSettings } from 'react-icons/io';
import { IoAnalytics } from 'react-icons/io5';
import { CgProfile } from 'react-icons/cg';
import { BsBoxArrowInDownRight } from 'react-icons/bs';
import './index.css';

const Sidebar = (props) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { change } = props;

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className={change ? 'side-container dark-mode' : 'side-container light-mode'}>
      <h1 className="head-element">DataBoard</h1>
      <aside className="sidebar">
        <button className="toggle-button" onClick={toggleDropdown}>
          <FaBars />
        </button>
        <ul className={`menu ${isDropdownOpen ? 'open' : ''}`}>
          <Link to="/" className={change ? 'highlight-div dark-mode' : 'highlight-div light-mode'}>
            <li>
              <FaHome />
              DashBoard
            </li>
          </Link>
          <li>
            <LiaTableSolid />
            Tables
          </li>
          <li>
            <CgProfile />
            Profile
          </li>
          <li>
            <IoAnalytics />
            Analytics
          </li>
          <li>
            <IoMdSettings />
            Settings
          </li>
          <li>
            <BsBoxArrowInDownRight />
            SignUp
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
