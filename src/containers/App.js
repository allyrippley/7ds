import React, { PropTypes } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from '../actions/headerActions'
import styles from './styles'
import Header from '../components/Header'
const App = (props) => {
  actions.loadLinks()
  window.console.log(props)
  return (
    <div style={styles.root}>
      <Header />
      <div style={styles.view}>
        {props.children}
      </div>
    </div>
  )
}

App.propTypes = {
  children: PropTypes.element
}

function mapStateToProps(state) {
  return {
    headerInfo: state.headerLinks
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
