import React from 'react'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from '../../actions/heroActions'

const Contact = (props) => {
  window.console.log('MainContactProps: ', props)
  return (
    <div style={{width: '100%'}}>
      <div>
        <form style={{display: 'flex', flex: 1, flexDirection: 'column', flexWrap: 'wrap'}}>
          <div style={{flex: 1, maxWidth: 600}}>
            <input style={{height: 30, margin: 3, flex: .5, width: '40%'}} type="text" />
            <input style={{height: 30, margin: 3, flex: .5, width: '40%'}} type="text" />
          </div>
          <div style={{flex: 1, maxWidth: 600}}>
            <input style={{height: 30, margin: 3, flex: 1, width: '80%'}} type="text" />
          </div>
        </form>
      </div>
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
