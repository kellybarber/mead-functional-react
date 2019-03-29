import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Home from '../sections/Home/Home'

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' component={Home}/>
    </Switch>
  </BrowserRouter>
)