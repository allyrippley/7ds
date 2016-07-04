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
  position: 'relative',
  zIndex: 5,
  backgroundSize: 'cover',
  backgroundImage: 'url(https://static.pexels.com/photos/8101/sea-sky-sunset-water.jpg)',
  backgroundPosition: '50% 0',
  backgroundRepeat: 'no-repeat',
  width: '100%',
  textAlign: 'center',
  color: '#fff',
  height: '536px',
  overflow: 'hidden'

}
styles.title = {
  fontSize: '5em'
}

styles.container2 = {
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
      <div>
        <div>
        </div>
      </div>
      <div>
        <div style={{height: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'space-around'}}>
          {/*	<div className="prehead"><img src="" alt=""></div> */}
          <h4>Welcome to</h4>
          <h1 style={styles.title}>7 Design Studios</h1>
          <Link to="/"><h3>Building Solutions.</h3></Link>
          <a style={styles.pill}>Scroll for more</a>
        </div>
      </div>
      <div>test</div>
    </section>
  )
}

export default Main
