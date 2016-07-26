import React from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from '../../../actions/headerActions'

class SubMenu extends React.Component {
  constructor(props) {
    super(props)
    this.showAppSubMenu = this.showAppSubMenu.bind(this)
    this.hideAppSubMenu = this.hideAppSubMenu.bind(this)
  }
  showAppSubMenu() {
    this.props.actions.showAppSubMenu
  }
  hideAppSubMenu() {
    this.props.actions.hideAppSubMenu
  }
  render() {
    window.console.log(this.props)
    const { showMenu } = this.props
    return (
      <div>
        <div onClick={this.showAppSubMenu()} onMouseEnter={this.showAppSubMenu()} onMouseLeave={this.hideAppSubMenu()} style={{
          textAlign: 'center',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          height: '100%'}}
        >
          {this.props.name}
        </div>
        {showMenu  &&
            <div style={{
            backgroundColor: 'grey',
            height: '200px',
            width: '200px',
            position: 'absolute'
          }}>

          </div>
        }
    </div>
    )
    }
  }



  function mapStateToProps(state) {
    window.console.log('SubMenuState: ', state)
    return {
      showMenu: state.headerInfo.showAppSubMenu
    }
  }

  function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(actions, dispatch)
    }
  }
  SubMenu.propTypes = {
    actions: React.PropTypes.object,
    showMenu: React.PropTypes.function,
    name: React.PropTypes.strings
  }
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(SubMenu)
