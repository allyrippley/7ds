import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './containers/App'
import Main from './containers/Main'
import AboutPage from './containers/AboutPage'
import Portfolio from './containers/Portfolio'
import PortfolioPage from './containers/Portfolio/Page'
import Contact from './containers/Contact'
import NotFoundPage from './components/NotFoundPage.js'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Main}/>
    <Route path="fuel-savings" component={Main}/>
    <Route path="portfolio/page/:id" component={PortfolioPage}/>
    <Route path="portfolio" component={Portfolio}/>
    <Route path="contact" component={Contact}/>
    <Route path="about" component={AboutPage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
)
