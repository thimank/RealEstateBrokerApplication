import { Route, Switch } from 'react-router-dom';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import CustomerHomePage from './components/customer/CustomerHomePage';
import Footer from './components/homepage/Footer';
import Home from './components/homepage/Home';
import User from './components/user/User';
import UserTable from './components/user/UserTable';
import CustomerTable from './components/customer/CustomerTable';
import CustomerDetails from './components/customer/CustomerDetails';
import BrokerHomePage from './components/broker/BrokerHomePage';


function App() {
  return (
    <div >
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
