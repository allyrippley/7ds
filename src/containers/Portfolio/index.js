import React, { Component } from 'react'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from '../../actions/heroActions'
import { Link } from 'react-router'
import PhotoGrid from '../../components/blocks/PhotoGrid'
import data from './dataFile'
class Main extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    //  document.getElementById('header').style.backgroundColor = 'black'
  }
  componentWillUnmount() {
    //  document.getElementById('header').style.backgroundColor = 'inherit'
  }
  render() {
      window.console.log('MainPortfolioProps: ', this.props)
    return (
      <div style={{width: '100%', marginTop: 35}}>
        <div style={{height: 150, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          To find out more, please <Link to="/contact" style={{paddingLeft: 5}}>Contact Me</Link>.
        </div>
        <PhotoGrid data={data} linkPrefix={'portfolio/page'}/>
      </div>
    )
  }
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
