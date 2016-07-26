import React from 'react'
import { Link } from 'react-router'

// import {connect} from 'react-redux'
// import {bindActionCreators} from 'redux'
// import * as actions from '../../actions/heroActions'
let styles = {}
styles.image = {
  width: '100%',
  position: 'absolute'
}
styles.mainText = {
  zIndex: 1
}
styles.container = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  position: 'fixed',
  zIndex: 5,
  backgroundSize: 'cover',
  backgroundImage: `url(${require('../../../img/1.jpeg')})`,
  backgroundPosition: '50% 0',
  backgroundRepeat: 'no-repeat',
  width: '100%',
  textAlign: 'center',
  color: '#fff',
  height: '100%',
  overflow: 'hidden'

}
styles.title = {
  fontSize: '5em'
}

styles.container2 = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  position: 'absolute',
  zIndex: -1,
  top: '0px',
  left: '0px',
  bottom: '0px',
  right: '0px',
  overflow: 'hidden',
  WebkitBackgroundSize: 'cover',
  backgroundImage: 'url(https://static.pexels.com/photos/8101/sea-sky-sunset-water.jpg)',
  backgroundSize: 'cover',
  backgroundPosition: '50% 50%',
  backgroundRepeat: 'no-repeat'
}

styles.pillButton = {
  border: '2px solid #fff',
  margin: '0 auto',
  maxWidth: '300px',
  padding: '10px 15px',
  borderRadius: '30px'
}

const Main = (props) => {
  window.console.log('HeroProps:', props)
  return (
    <section style={styles.container}>
      <h4 style={{fontSize: '3em'}}>Welcome to</h4>
      <h1 style={styles.title}>7 Design Studios</h1>
      <Link to="/"><h3 style={{fontSize: '2em'}}>Building Solutions.</h3></Link>
      <a style={styles.pillButton}>Scroll for more</a>
    </section>
  )
}

export default Main
