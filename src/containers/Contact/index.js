import React from 'react'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from '../../actions/heroActions'

const Contact = (props) => {
  window.console.log('MainContactProps: ', props)
  return (
    <div style={{width: '100%'}}>
      <div>
        <form style={{display: 'flex', flex: 1, flexDirection: 'column', margin: '0 auto', flexWrap: 'wrap', maxWidth: '600px'}}>
            <div style={{display: 'flex'}}>
              <div style={{width: '48%', margin: '1%'}}>
                <input style={{height: 30, width: '100%'}} type="text" placeholder="First"/>
              </div>
              <div style={{width: '48%', margin: '1%'}}>
                <input style={{height: 30, width: '100%'}} type="text" placeholder="Last"/>
              </div>
            </div>
            <div>
              <div style={{width: '98%', margin: '1%'}}>
                <input style={{height: 30, width: '100%'}} type="text" placeholder="Email"/>
              </div>
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
