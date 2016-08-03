import React, { Component } from 'react'
import { Link } from 'react-router'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
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
  backgroundImage: `url(${require('../../../img/1sm.jpg')})`,
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

class HeroFull extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const url = `url(${require('../../../img/1md.png')})`
    const backdrop = document.getElementById('backdrop')
      backdrop.style.transition = 'background-image 3000ms'
    setTimeout(function() {
      backdrop.style.backgroundImage = url
    }, 1500)
  }
  render() {
    window.console.log('HeroProps:', this.props)

    return (
      <section id="backdrop" style={styles.container}>
        <h4 style={{fontSize: '3em'}}>
        </h4>
        <ReactCSSTransitionGroup transitionName="fadeIn"
          transitionAppear={true} transitionAppearTimeout={5000}
          transitionEnter={false} transitionLeave={false}>
          <h1 key="1" id="mastText" style={styles.title}>7 Design Studios</h1>
        </ReactCSSTransitionGroup>
        <Link to="/">
          <ReactCSSTransitionGroup transitionName="test"
          transitionAppear={true} transitionAppearTimeout={10000} transitionEnter={true}
          transitionEnterTimeout={10000} transitionLeave={false}>
            <h3 key="2" style={{fontSize: '2em'}}>Building Solutions.</h3>
          </ReactCSSTransitionGroup>
        </Link>
        <Link to="/portfolio" >
          <ReactCSSTransitionGroup transitionName="test2"
          transitionAppear={true} transitionAppearTimeout={15000} transitionEnter={true}
          transitionEnterTimeout={10000} transitionLeave={false}>
            <div style={styles.pillButton}>Click for more</div>
          </ReactCSSTransitionGroup>
          </Link>
      </section>
    )
  }
}

export default HeroFull
