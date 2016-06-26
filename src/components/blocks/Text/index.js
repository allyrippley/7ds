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
  zIndex: 8,
  margin: '0 auto',
  background: '#fff',
  width: '100%',
  textAlign: 'center',
  height: '536px',
  overflow: 'hidden'

}
styles.textHolder = {
  padding: '3em'
}


const Text = (props) => {
  return (
    <section style={styles.container}>
      <div style={styles.textHolder}>
        <header>
          <h2>
            Committed to Shipping
            <br />
            First-class Solutions
          </h2>
          <hr />
          <p>
            Striving to stay on the forefront of technology is no easy task, especially in regards to JavaScript. While frameworks like Angular, React, Backbone, and Ember have made the web a more interesting place,
          </p>
        </header>
      </div>
    </section>
  )
}

export default Text
