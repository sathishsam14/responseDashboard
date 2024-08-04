import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DashBoard from './components/DashBoard';
import Notification from './components/Notification'
import './App.css';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<DashBoard />} />
      <Route path="/notification" exact element={<Notification />} />
    </Routes>
  </BrowserRouter>
);

export default App;
