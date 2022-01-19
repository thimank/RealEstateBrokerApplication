import React from 'react'
import Body from './Body'
import Login from './Login'
import { Route, Switch, Redirect } from 'react-router-dom'
import Signup from './Signup'
import Developers from './Delelopers'
import About from './About'
import OurProperties from './OurProperties'
import CustomerDetails from '../customer/CustomerDetails'
import EditDetails from '../customer/EditDetails'
import CustomerProperties from '../customer/CustomerProperties'
import BrokerHomePage from '../broker/BrokerHomePage'
import BuyProperty from '../customer/BuyProperty'
import SearchProperty from '../customer/SearchProperty'
import CustomerHomePage from '../customer/CustomerHomePage'
import AddProperty from '../broker/AddProperty'
import DeleteProperty from '../broker/DeleteProperty'
import AllProperties from '../broker/AllProperties'
import SearchPropertyC from '../customer/SearchProperty'
import SearchPropertyB from '../broker/SearchProperty'
import Contactus from './ContactUs'
import UpdateProperty from '../broker/UpdateProperty'


function Home() {
    return (
        <div>
            <Switch>
                <Route path="/" exact><Redirect to="/body" /></Route>
                <Route path="/body"><Body /></Route>
                <Route path="/login" ><Login /></Route>
                <Route path="/signup" ><Signup /></Route>
                <Route path="/developers"><Developers /></Route>
                <Route path="/about"><About /></Route>
                <Route path="/ourproperties"><OurProperties /></Route>
                <Route path="/customerDetails"><CustomerDetails /></Route>
                <Route path="/editDetails"><EditDetails /></Route>
                <Route path="/customerProperties"><CustomerProperties /></Route>
                <Route path="/broker"><BrokerHomePage /></Route>
                <Route path="/buyProperty"><BuyProperty /></Route>
                <Route path="/searchPropertyC"><SearchPropertyC /></Route>
                <Route path="/searchPropertyB"><SearchPropertyB /></Route>
                <Route path="/customer"><CustomerHomePage /></Route>
                <Route path="/addProperty"><AddProperty /></Route>
                <Route path="/updateProperty"><UpdateProperty /></Route>
                <Route path="/deleteProperty"><DeleteProperty/></Route>
                <Route path="/allProperties"><AllProperties/></Route>
                <Route path="/contactus"><Contactus/></Route>
            </Switch>
        </div>
    )
}

export default Home;
