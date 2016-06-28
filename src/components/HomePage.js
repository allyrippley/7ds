import React from 'react'
import {Link} from 'react-router'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from '../actions/heroActions'

const HomePage = (props) => {
  window.console.log('HomePageProps: ', props)
  return (
    <div>
      <h1>React Slingshot</h1>

      <h2>Get Started</h2>
      <ol>
        <li>Review the <Link to="fuel-savings">demo app</Link></li>
        <li>Remove the demo and start coding: npm run remove-demo</li>
      </ol>
    </div>
  )
}


function mapStateToProps(state) {
  return {
    fuelSavings: state.fuelSavings
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage)
