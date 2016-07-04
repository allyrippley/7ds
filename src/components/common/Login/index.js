import React from 'react'

import {connect} from 'react-redux'
// import {bindActionCreators} from 'redux'

import styles from './styles'
const Login = (props) => {
  window.console.log('MainLoginProps: ', props)
  return (
    <div style={{color: '#777', fontSize: 10, display: 'flex', justifyContent: 'space-around', textTransform: 'uppercase'}}>
      <div>Create Account</div>
      <div style={styles.verticalSeparator}></div>
      <div>Log In</div>
      <div>Cart</div>
    </div>
  )
}


function mapStateToProps(state) {
  window.console.log('MainLoginState: ', state)
  return {
  //  fuelSavings: state.fuelSavings
  }
}

function mapDispatchToProps() {
  return {
    // actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
