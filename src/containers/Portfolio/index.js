import React from 'react'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from '../../actions/heroActions'

import PhotoGrid from '../../components/blocks/PhotoGrid'
import data from './dataFile'
const Main = (props) => {
  window.console.log('MainPortfolioProps: ', props)

  return (
    <div style={{width: '100%', marginTop: 35}}>
      <div style={{height: 150, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        Test
      </div>
      <PhotoGrid data={data} linkPrefix={'portfolio/page'}/>
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
