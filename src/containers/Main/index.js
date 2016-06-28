import React from 'react'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from '../../actions/heroActions'

import Hero from '../../components/blocks/Hero'
import Text from '../../components/blocks/Text'

const Main = (props) => {
  window.console.log('MainContainerProps: ', props)
  return (
    <div style={{width: '100%'}}>
      <Hero />
      <Text />
    </div>
  )
}


function mapStateToProps(state) {
  window.console.log('MainContainerState: ', state)
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
)(Main)
