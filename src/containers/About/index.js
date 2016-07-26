import React from 'react'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from '../../actions/heroActions'

const Contact = (props) => {
  window.console.log('MainContactProps: ', props)
  return (
    <div style={{width: '100%', paddingTop: '55px'}}>
      <h2 className="alt-header">About</h2>
    </div>
  )
}


function mapStateToProps(state) {
  window.console.log('MainContactState: ', state)
  return {
  //  fuelSavings: state.fuelSavings
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
)(Contact)
