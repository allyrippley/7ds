import React, { PropTypes } from 'react'
import { Link, IndexLink } from 'react-router'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from '../actions/heroActions'

const App = (props) => {
  return (
    <div>
      <IndexLink to="/">Home</IndexLink>
      {' | '}
      <Link to="/work">Work</Link>
      {' | '}
      <Link to="/about">About</Link>
      <br/>
      {props.children}
    </div>
  )
}

App.propTypes = {
  children: PropTypes.element
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
  mapDispatchToProps)(App)
