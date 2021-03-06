import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import radium from 'radium'
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
  width: 'auto',
  height: '100%'
}
styles.block = {
  minWidth: 300,
  flex: '1 1 0',
  zIndex: 5,
  backgroundSize: 'cover',
  backgroundPosition: '50% 0',
  backgroundRepeat: 'no-repeat',
  width: '100%',
  height: '100%',
  textAlign: 'center',
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
  left: 0
}
styles.cardText = {
  fontSize: '2.5vw',
  textShadow: '1px 1px 1px #000',
  margin: 20
}
const PhotoGrid = (props) => {
  window.console.log('PhotoGridProps: ', props)
  const rowdivs =  props.data.map((r, i) => {
    const block = {
      minWidth: 300,
      flex: '1 1 0',
      zIndex: 5,
      backgroundSize: 'cover',
      backgroundPosition: '50% 0',
      backgroundRepeat: 'no-repeat',
      backgroundImage: `url('${r.src}')`,
      width: '100%',
      height: '100%',
      textAlign: 'center',
      color: '#fff',
      minHeight: Math.random() > 0.5 ? '300px' : '260px',
      overflow: 'hidden',
      position: 'relative'
    }
        return (
          <div key={i} style={block}>
            {/*<img style={styles.image} src={r.src} /> */}
            <Link style={styles.clickArea} to={props.linkPrefix + '/' + r.id}>
              <span style={styles.cardText}>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    </span>
              <div />
            </Link>
          </div>
        )
      })
  return (
    <section style={styles.container}>
    {/*  <div style={{position: 'absolute', zIndex: -1, top: '0px', left: '0px', bottom: '0px', right: '0px', overflow: 'hidden', WebkitBackgroundSize: 'cover', backgroundImage: 'url(https://static.pexels.com/photos/8101/sea-sky-sunset-water.jpg)', backgroundSize: 'cover', backgroundPosition: '50% 50%', backgroundRepeat: 'no-repeat'}}>
      </div>
      */}
      {rowdivs}

    </section>
  )
}
PhotoGrid.propTypes = {
  data: PropTypes.array,
  linkPrefix: PropTypes.string
}
export default radium(PhotoGrid)
