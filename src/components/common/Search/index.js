import React from 'react'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Fa from 'react-fontawesome'
import styles from './styles'

const Search = (props) => {
  window.console.log('MainSearchProps: ', props)
  return (
    <div style={styles.container}>
      <input style={{border: '1px solid #000'}} type="text" />
      <Fa style={styles.icon} name="search" />
    </div>
  )
}


function mapStateToProps(state) {
  window.console.log('MainSearchState: ', state)
  return {
  //  fuelSavings: state.fuelSavings
  }
}

function mapDispatchToProps(dispatch) {
  return {
    // actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search)
