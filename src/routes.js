import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './containers/App'
import HomePage from './components/HomePage'
import Main from './containers/Main'
import AboutPage from './containers/AboutPage'
import Portfolio from './containers/Portfolio'
import NotFoundPage from './components/NotFoundPage.js'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="fuel-savings" component={Main}/>
    <Route path="portfolio" component={Portfolio}/>
    <Route path="about" component={AboutPage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
)
