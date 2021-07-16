import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import { Home } from './Home'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'

import { NotFound } from './pages/NotFound'
import { ServiceDetails } from './pages/ServiceDetails'

export const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/services" exact>
          <ServiceDetails />
        </Route>
        <Route path="/404">
          <NotFound />
        </Route>
        <Redirect to="/404" />
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}
