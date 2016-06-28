import React from 'react'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from '../../actions/heroActions'

import PhotoGrid from '../../components/blocks/PhotoGrid'

const Main = (props) => {
  window.console.log('MainPortfolioProps: ', props)
  return (
    <div style={{width: '100%'}}>
      <PhotoGrid />
    </div>
  )
}


function mapStateToProps(state) {
  window.console.log('MainPortfolioState: ', state)
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
