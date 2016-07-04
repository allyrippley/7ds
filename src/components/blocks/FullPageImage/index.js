import React from 'react'

// import {connect} from 'react-redux'
// import {bindActionCreators} from 'redux'
// import * as actions from '../../actions/heroActions'

const Full = (props) => {
  window.console.log('FullPageImageProps: ', props)
  const container = {
    position: 'fixed',
    zIndex: 50,
    top: '0px',
    left: '0px',
    bottom: '0px',
    right: '0px',
    margin: '0 auto',
    overflowY: 'scroll'
  }
  return (
    <section style={container}>
      <img style={{width: '100%'}} src={props.src} />
    </section>
  )
}

export default Full
