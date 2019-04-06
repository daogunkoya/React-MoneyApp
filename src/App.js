import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout'
import HomePage from './containers/HomePage/HomePage'

import Transactions from './containers/Transactions/Transactions'
import Senders from './containers/Senders/Senders'
import Users from './containers/Users/Users'
import Receivers from './containers/Receivers/Receivers'
import Rates from './containers/Rates/Rates'

import Commissions from './containers/Commissions/Commissions'
import Banks from './containers/Banks/Banks'
import Currencies from './containers/Currencies/Currencies'



import {Switch,Route} from 'react-router-dom'
import './App.css'

class App extends Component {
  render() {
    return (
      <Layout>
          <Switch>
          
        
            
            <Route  path="/transactions/:id/transaction"  component = {Transactions}/>
            <Route  path="/transactions"  component = {Transactions} />
           
            
            <Route path= '/senders/:id/senders' exact  component = {Senders}/>
            <Route  path="/senders"  component = {Senders} />

            <Route path= '/users/:id/users' exact  component = {Users}/>
            <Route  path="/users"  component = {Users} />


            <Route  path="/receivers/:id/receiver"  component = {Receivers} />
            <Route path= '/receivers'  component = {Receivers}/>
            
            
            <Route  path="/rates/:id/rate"  component = {Rates} />
            <Route  path="/rates"  component = {Rates} />
          

            <Route  path="/commissions/:id/commissions"  component = {Commissions} />
            <Route  path="/commissions"  component = {Commissions} />

            <Route  path="/currencies:id/currency"  component = {Currencies} />
            <Route  path="/currencies"  component = {Currencies} />

            <Route  path="/banks/:id/bank"  component = {Banks} />
            <Route  path="/banks"  component = {Banks} />

            {/* <Route path= '/:id/create/receiver' exact  component = {CreateReceiver}/> */}
            
            
            <Route  path="/home" exact  component = {HomePage} />
            <Route  path="/" exact  component = {HomePage} />
          </Switch>
      </Layout>
    );
  }
}

export default App;
