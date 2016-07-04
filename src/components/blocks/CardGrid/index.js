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
  flex: 1,
  flexWrap: 'wrap'

}
styles.title = {
  fontSize: '5em'
}
styles.image = {

}
styles.block = {
  minWidth: 300,
  flex: '1 1 0',
  zIndex: 5,
  backgroundSize: 'cover',
  backgroundImage: 'url(https://static.pexels.com/photos/8101/sea-sky-sunset-water.jpg)',
  backgroundPosition: '50% 0',
  backgroundRepeat: 'no-repeat',
  width: '100%',
  height: '100%',
  color: '#fff',
  minHeight: Math.random() > 0.5 ? '300px' : '260px',
  overflow: 'hidden',
  position: 'relative'
}
styles.clickArea = {
  position: 'absolute',
  top: 0,
  bottom: 0,
  right: 0,
  left: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-end'
}
styles.cardText = {
  fontSize: '2.5vw',
  textShadow: '1px 1px 1px #000',
  margin: 20
}

const Main = (props) => {
  window.console.log('HeroProps: ', props)
  return (
    <section style={styles.container}>
    {/*  <div style={{position: 'absolute', zIndex: -1, top: '0px', left: '0px', bottom: '0px', right: '0px', overflow: 'hidden', WebkitBackgroundSize: 'cover', backgroundImage: 'url(https://static.pexels.com/photos/8101/sea-sky-sunset-water.jpg)', backgroundSize: 'cover', backgroundPosition: '50% 50%', backgroundRepeat: 'no-repeat'}}>
      </div>
      */}
      <div style={styles.block}>
        <Link style={styles.clickArea} to="/">
          <div style={styles.image} />
          <span style={styles.cardText}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
          </span>
        </Link>
      </div>
      <div style={styles.block}>
        <Link to="/">
          <div style={styles.image} />
        </Link>
      </div>
      <div style={styles.block}>
        <Link to="/">
          <div style={styles.image} />
        </Link>
      </div>
      <div style={styles.block}>
        <Link to="/">
          <div style={styles.image} />
        </Link>
      </div>
      <div style={styles.block}>
        <Link to="/">
          <div style={styles.image} />
        </Link>
      </div>
      <div style={styles.block}>
        <Link to="/">
          <div style={styles.image} />
        </Link>
      </div>
    </section>
  )
}

export default Main
